"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import BottomBarPublic from "../components/BottomBarPublic";
import { getCartItemKey } from "../context/userLocalStorage";
import { getSnapshotPricing } from "../lib/pricing";

interface OrderProduct {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
  descuento?: number;
  imagen?: string;
}

interface Order {
  id: string;
  productos: OrderProduct[];
  total: number;
  estado?: string;
}

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const safeSearchParams = searchParams ?? new URLSearchParams();
  const orderId = safeSearchParams.get("orderId");
  const paid = safeSearchParams.get("paid") === "true";
  const redirectStatus = safeSearchParams.get("redirect_status"); // payment gateway redirect status
  const [copied, setCopied] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);
  const [loadingOrder, setLoadingOrder] = useState(false);
  const { carrito, removeCarrito, isLogged } = useUser();

  // Cargar orden desde Firestore
  useEffect(() => {
    if (!orderId) return;
    
    const fetchOrder = async () => {
      try {
        setLoadingOrder(true);
        // Buscar orden en la colección 'ordenes'
        const response = await fetch(`/api/ordenes/${orderId}`);
        if (response.ok) {
          const data = await response.json();
          setOrder(data);
        }
      } catch (error) {
        console.error("Error cargando orden:", error);
      } finally {
        setLoadingOrder(false);
      }
    };
    
    fetchOrder();
  }, [orderId]);

  // Limpiar carrito cuando llega desde redirect exitoso del pasarela de pago
  useEffect(() => {
    if (redirectStatus === "succeeded" && carrito.length > 0) {
      carrito.forEach((p) => removeCarrito(getCartItemKey(p)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectStatus]);

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const orderLink = orderId ? `${origin}/order-confirmation?orderId=${orderId}` : null;
  const isPaidOrder = paid || redirectStatus === "succeeded";

  const handleCopy = () => {
    if (!orderLink) return;
    navigator.clipboard.writeText(orderLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Simulate order data for demo (replace with real order fetch if needed)
  // Example: const [order, setOrder] = useState(null); useEffect(() => { fetchOrder(orderId).then(setOrder); }, [orderId]);
  // For now, just show the UI for the orderId, and if you want to show products, add a section below:

  return (
    <div
      style={{ background: 'var(--bg)', color: 'var(--text)' }}
      className="min-h-screen flex flex-col mt-2"
    >
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 flex flex-col items-center text-center">
        <BottomBarPublic/>
        {/* Icono de éxito */}
        {isPaidOrder ? (
          <div className="w-20 h-20 rounded-full bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-500/30 mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        ) : (
          <span className="material-icons-round text-green-500 text-7xl mb-4">check_circle</span>
        )}

        <h1 className="text-3xl font-bold mb-2 text-[#3a1859] dark:text-white">
          {isPaidOrder ? "¡Pago completado!" : "¡Orden generada con éxito!"}
        </h1>

        {isPaidOrder && (
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-sm font-bold border border-green-200 dark:border-green-700">
              💳 Pago verificado
            </span>
          </div>
        )}

        {orderId && (
          <div className="w-full mb-5 p-4 bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/10 rounded-xl">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Número de orden</p>
            <p className="text-2xl font-extrabold text-[#3a1859] dark:text-white mb-3">{orderId}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Link único de tu orden (guárdalo para consultarla luego)</p>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 overflow-x-auto">
              <span className="flex-1 text-xs text-slate-700 dark:text-slate-300 break-all text-left">{orderLink}</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-3 py-1 rounded-lg bg-#E0A11A hover:bg-#c88c0a text-white text-xs font-bold transition shrink-0"
              >
                <span className="material-icons-round text-sm">{copied ? "check" : "content_copy"}</span>
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>
          </div>
        )}

        {/* --- Mostrar productos del pedido --- */}
        {order && order.productos && order.productos.length > 0 && (
          <div className="w-full mt-8 bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#3a1859] dark:text-white mb-4">Productos de tu orden</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-2 font-semibold text-slate-700 dark:text-slate-300">Producto</th>
                  <th className="text-center py-2 font-semibold text-slate-700 dark:text-slate-300">Cant.</th>
                  <th className="text-right py-2 font-semibold text-slate-700 dark:text-slate-300">Precio unit.</th>
                  <th className="text-right py-2 font-semibold text-slate-700 dark:text-slate-300">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.productos.map((p: OrderProduct, i: number) => {
                  const { discount, hasDiscount, fakeOldPrice, finalPrice } = getSnapshotPricing(p);
                  const subtotal = finalPrice * (p.cantidad || 1);
                  return (
                    <tr key={i} className="border-b border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800/50">
                      <td className="py-3 text-slate-800 dark:text-slate-200">{p.nombre}</td>
                      <td className="text-center py-3 text-slate-800 dark:text-slate-200">{p.cantidad}</td>
                      <td className="text-right py-3">
                        {hasDiscount && (
                          <span className="line-through text-xs text-slate-400 mr-2">${fakeOldPrice.toFixed(2)}</span>
                        )}
                        <span className="font-semibold text-#E0A11A">${finalPrice.toFixed(2)}</span>
                        {hasDiscount && (
                          <span className="ml-2 text-xs font-bold text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-300 px-2 py-0.5 rounded-full">-{discount}%</span>
                        )}
                      </td>
                      <td className="text-right py-3 font-bold text-slate-800 dark:text-slate-200">${subtotal.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
              <div className="text-right">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total del pedido:</p>
                <p className="text-2xl font-bold text-#E0A11A">${order.total?.toFixed(2) || '0.00'}</p>
              </div>
            </div>
          </div>
        )}

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          {isPaidOrder
            ? "Tu pago fue procesado exitosamente. Recibirás un comprobante en tu correo. Visita el local para retirar tus productos."
            : "Visita el local en la fecha y hora indicadas para retirar tus productos. Presenta el número de orden al llegar."}
        </p>

        {!isLogged && (
          <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg border border-yellow-300 text-sm mb-6">
            ¿Quieres hacer seguimiento de tu orden?{" "}
            <Link href="/login?tab=register" className="underline font-semibold">
              Regístrate e inicia sesión
            </Link>{" "}
            para una mejor experiencia de compra.
          </div>
        )}

        <Link href="/" className="inline-block px-6 py-3 bg-#E0A11A hover:bg-#c88c0a text-white font-bold rounded-xl shadow-lg">
          Volver al inicio
        </Link>
      </main>
    </div>
  );
}

