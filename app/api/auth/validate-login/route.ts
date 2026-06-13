import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "../../../lib/firebase-admin";
import { checkRateLimit, normalizeIp } from "../../../lib/rate-limit-v2";

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  return forwardedFor ? forwardedFor.split(",")[0].trim() : (realIp || "unknown");
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email y password requeridos" }, { status: 400 });
    }

    const ip = normalizeIp(getClientIp(req));
    
    // Multi-capa rate limit (Email + IP)
    // Nota: NO resetea en login exitoso (mantiene historial de intentos)
    const rateLimit = await checkRateLimit(
      email.trim().toLowerCase(),
      ip,
      "login"
    );
    
    if (!rateLimit.allowed) {
      console.warn(`[validate-login] Rate limit: ${rateLimit.reason}`);
      return NextResponse.json(
        {
          error: rateLimit.reason,
          retryAfter: rateLimit.retryAfter,
        },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter || 300) } }
      );
    }

    // Verificar que el usuario existe en Firebase
    try {
      const userRecord = await adminAuth.getUserByEmail(email.trim().toLowerCase());

      // ✅ Usuario existe - validación de contraseña ocurre en el cliente con Firebase Auth
      // NOTA: No limpiamos el contador (mantiene historial para análisis)
      // Esto previene bypass: alguien no puede hacer 4 fallos + 1 exitoso para "limpiar"
      
      console.log(`[validate-login] ✅ Usuario encontrado: ${email}`);
      
      return NextResponse.json({
        success: true,
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName || null,
      });

    } catch (authErr: any) {
      // Usuario no existe
      console.warn(`[validate-login] ❌ Usuario no encontrado: ${email}`);
      return NextResponse.json(
        { error: "Email o contraseña incorrectos" },
        { status: 401 }
      );
    }

  } catch (err: any) {
    console.error("[validate-login] Error:", err);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}
