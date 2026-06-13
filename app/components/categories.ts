// Estructura de categorías globales para la florería Julietas
export const CATEGORIES_STRUCTURE = {
  flores: {
    id: 'flores',
    name: 'Flores',
    icon: 'local_florist',
    isDropdown: true,
    subcategories: {
      floresindividuales: {
        id: 'floresindividuales',
        name: 'Flores Individuales',
        icon: 'favorite',
        subsubcategories: {
          rosas: {
            id: 'rosas',
            name: 'Rosas',
            icon: 'favorite',
            subsubcategories: {
              'rosas-rojas': { id: 'rosas-rojas', name: 'Rosas Rojas' },
              'rosas-blancas': { id: 'rosas-blancas', name: 'Rosas Blancas' },
              'rosas-rosadas': { id: 'rosas-rosadas', name: 'Rosas Rosadas' },
              'rosas-mixtas': { id: 'rosas-mixtas', name: 'Rosas Mixtas' }
            }
          },
          tulipanes: {
            id: 'tulipanes',
            name: 'Tulipanes',
            icon: 'local_florist',
            subsubcategories: {
              'tulipanes-rojo': { id: 'tulipanes-rojo', name: 'Tulipanes Rojos' },
              'tulipanes-rosado': { id: 'tulipanes-rosado', name: 'Tulipanes Rosados' },
              'tulipanes-amarillo': { id: 'tulipanes-amarillo', name: 'Tulipanes Amarillos' },
              'tulipanes-mixto': { id: 'tulipanes-mixto', name: 'Tulipanes Mixtos' }
            }
          },
          girasoles: {
            id: 'girasoles',
            name: 'Girasoles',
            icon: 'wb_sunny',
            subsubcategories: {
              'girasoles-naturales': { id: 'girasoles-naturales', name: 'Girasoles Naturales' },
              'girasoles-premium': { id: 'girasoles-premium', name: 'Girasoles Premium' }
            }
          },
          orquideas: {
            id: 'orquideas',
            name: 'Orquídeas',
            icon: 'eco',
            subsubcategories: {
              'orquideas-blancas': { id: 'orquideas-blancas', name: 'Orquídeas Blancas' },
              'orquideas-rosadas': { id: 'orquideas-rosadas', name: 'Orquídeas Rosadas' },
              'orquideas-mixtas': { id: 'orquideas-mixtas', name: 'Orquídeas Mixtas' }
            }
          }
        }
      },
      arreglosflores: {
        id: 'arreglosflores',
        name: 'Arreglos de Flores',
        icon: 'celebration',
        subsubcategories: {
          'arreglos-romanticos': { id: 'arreglos-romanticos', name: 'Románticos' },
          'arreglos-cumpleanos': { id: 'arreglos-cumpleanos', name: 'Cumpleaños' },
          'arreglos-bodas': { id: 'arreglos-bodas', name: 'Bodas' },
          'arreglos-condolencias': { id: 'arreglos-condolencias', name: 'Condolencias' },
          'arreglos-corporativo': { id: 'arreglos-corporativo', name: 'Corporativo' },
          'arreglos-graduacion': { id: 'arreglos-graduacion', name: 'Graduación' }
        }
      },
      ramos: {
        id: 'ramos',
        name: 'Ramos Especiales',
        icon: 'card_giftcard',
        subsubcategories: {
          'ramos-24rosas': { id: 'ramos-24rosas', name: 'Ramo 24 Rosas' },
          'ramos-36rosas': { id: 'ramos-36rosas', name: 'Ramo 36 Rosas' },
          'ramos-50rosas': { id: 'ramos-50rosas', name: 'Ramo 50 Rosas' },
          'ramos-premium': { id: 'ramos-premium', name: 'Ramo Premium' }
        }
      }
    }
  },
  detalles: {
    id: 'detalles',
    name: 'Detalles',
    icon: 'card_giftcard',
    isDropdown: true,
    subcategories: {
      floresa: {
        id: 'floresa',
        name: 'Flores + Detalles',
        icon: 'favorite',
        subsubcategories: {
          'flores-peluche': { id: 'flores-peluche', name: 'Flores + Peluche' },
          'flores-chocolate': { id: 'flores-chocolate', name: 'Flores + Chocolate' },
          'flores-globos': { id: 'flores-globos', name: 'Flores + Globos' },
          'flores-vela': { id: 'flores-vela', name: 'Flores + Velas Aromáticas' }
        }
      },
      plantas: {
        id: 'plantas',
        name: 'Plantas Decorativas',
        icon: 'eco',
        subsubcategories: {
          'plantas-escritorio': { id: 'plantas-escritorio', name: 'Para Escritorio' },
          'plantas-sala': { id: 'plantas-sala', name: 'Para Sala' },
          'plantas-maceta': { id: 'plantas-maceta', name: 'Con Maceta' }
        }
      },
      accesorios: {
        id: 'accesorios',
        name: 'Accesorios',
        icon: 'sparkles',
        subsubcategories: {
          'accesorios-floreros': { id: 'accesorios-floreros', name: 'Floreros Especiales' },
          'accesorios-tarjetas': { id: 'accesorios-tarjetas', name: 'Tarjetas Personalizadas' },
          'accesorios-papel': { id: 'accesorios-papel', name: 'Papel de Envoltorio' }
        }
      }
    }
  },
  suscripcion: {
    id: 'suscripcion',
    name: 'Suscripciones',
    icon: 'favorite',
    isDropdown: false
  }
};
              'microfonos-lavalier': { id: 'microfonos-lavalier', name: 'Lavalier' }
            }
          },
          'mousepads': {
            id: 'mousepads',
            name: 'Mouse Pads',
            icon: 'crop_square',
            subsubcategories: {
              'mousepads-estandar': { id: 'mousepads-estandar', name: 'Estándar' },
              'mousepads-gaming': { id: 'mousepads-gaming', name: 'Gaming' },
              'mousepads-xxl': { id: 'mousepads-xxl', name: 'XXL' }
            }
          },
          cables: {
            id: 'cables',
            name: 'Cables',
            icon: 'settings_ethernet',
            subsubcategories: {
              'cables-usb': { id: 'cables-usb', name: 'USB' },
              'cables-hdmi': { id: 'cables-hdmi', name: 'HDMI' },
              'cables-3.5mm': { id: 'cables-3.5mm', name: '3.5mm' }
            }
          },
          adaptadores: {
            id: 'adaptadores',
            name: 'Adaptadores',
            icon: 'swap_horiz',
            subsubcategories: {
              'adaptadores-usb': { id: 'adaptadores-usb', name: 'USB' },
              'adaptadores-hdmi': { id: 'adaptadores-hdmi', name: 'HDMI' },
              'adaptadores-power': { id: 'adaptadores-power', name: 'Power' }
            }
          }
        }
      },
      'audio-sonido': {
        id: 'audio-sonido',
        name: 'Audio & Sonido',
        icon: 'speaker',
        subsubcategories: {
          parlantes: {
            id: 'parlantes',
            name: 'Parlantes',
            icon: 'speaker',
            subsubcategories: {
              'parlantes-2.0': { id: 'parlantes-2.0', name: '2.0 Estéreo' },
              'parlantes-2.1': { id: 'parlantes-2.1', name: '2.1 Con Subwoofer' },
              'parlantes-5.1': { id: 'parlantes-5.1', name: '5.1 Surround' }
            }
          },
          'amplificadores': {
            id: 'amplificadores',
            name: 'Amplificadores',
            icon: 'graphic_eq',
            subsubcategories: {
              'amplificadores-30w': { id: 'amplificadores-30w', name: '30W' },
              'amplificadores-50w': { id: 'amplificadores-50w', name: '50W' },
              'amplificadores-100w': { id: 'amplificadores-100w', name: '100W+' }
            }
          }
        }
      },
      'proteccion-electrica': {
        id: 'proteccion-electrica',
        name: 'Protección Eléctrica',
        icon: 'bolt',
        subsubcategories: {
          'reguladores': {
            id: 'reguladores',
            name: 'Reguladores',
            icon: 'tune',
            subsubcategories: {
              'reguladores-500w': { id: 'reguladores-500w', name: '500W' },
              'reguladores-1000w': { id: 'reguladores-1000w', name: '1000W' }
            }
          },
          'ups': {
            id: 'ups',
            name: 'UPS (Fuentes de Respaldo)',
            icon: 'battery_charging_full',
            subsubcategories: {
              'ups-500va': { id: 'ups-500va', name: '500VA' },
              'ups-1000va': { id: 'ups-1000va', name: '1000VA' },
              'ups-2000va': { id: 'ups-2000va', name: '2000VA' }
            }
          },
          'protectores': {
            id: 'protectores',
            name: 'Protectores Contra Sobretensión',
            icon: 'power',
            subsubcategories: {
              'protectores-4-tomas': { id: 'protectores-4-tomas', name: '4 Tomas' },
              'protectores-6-tomas': { id: 'protectores-6-tomas', name: '6 Tomas' },
              'protectores-8-tomas': { id: 'protectores-8-tomas', name: '8+ Tomas' }
            }
          }
        }
      },
      hogar: {
        id: 'hogar',
        name: 'Hogar',
        icon: 'home',
        subsubcategories: {
          'iluminacion': {
            id: 'iluminacion',
            name: 'Iluminación',
            icon: 'lightbulb',
            subsubcategories: {
              'iluminacion-led': { id: 'iluminacion-led', name: 'LED' },
              'iluminacion-rgb': { id: 'iluminacion-rgb', name: 'RGB Ambientación' },
              'iluminacion-smart': { id: 'iluminacion-smart', name: 'Smart Home' }
            }
          },
          'ventilacion': {
            id: 'ventilacion',
            name: 'Ventilación',
            icon: 'toys',
            subsubcategories: {
              'ventiladores-escritorio': { id: 'ventiladores-escritorio', name: 'Escritorio' },
              'ventiladores-pedestal': { id: 'ventiladores-pedestal', name: 'Pedestal' },
              'ventiladores-techo': { id: 'ventiladores-techo', name: 'Techo' }
            }
          }
        }
      },
      impresion: {
        id: 'impresion',
        name: 'Impresión',
        icon: 'print',
        subsubcategories: {
          impresoras: {
            id: 'impresoras',
            name: 'Impresoras',
            icon: 'print',
            subsubcategories: {
              'impresoras-laser': { id: 'impresoras-laser', name: 'Láser' },
              'impresoras-inyeccion': { id: 'impresoras-inyeccion', name: 'Inyección' },
              'impresoras-multifuncion': { id: 'impresoras-multifuncion', name: 'Multifunción' }
            }
          },
          'tinta-toner': {
            id: 'tinta-toner',
            name: 'Tinta & Tóner',
            icon: 'ink',
            subsubcategories: {
              'tinta-original': { id: 'tinta-original', name: 'Original' },
              'tinta-compatible': { id: 'tinta-compatible', name: 'Compatible' }
            }
          }
        }
      },
      redes: {
        id: 'redes',
        name: 'Redes',
        icon: 'wifi',
        subsubcategories: {
          routers: {
            id: 'routers',
            name: 'Routers',
            icon: 'wifi',
            subsubcategories: {
              'routers-wifi5': { id: 'routers-wifi5', name: 'WiFi 5 (AC)' },
              'routers-wifi6': { id: 'routers-wifi6', name: 'WiFi 6 (AX)' }
            }
          },
          modems: {
            id: 'modems',
            name: 'Módems',
            icon: 'wifi',
            subsubcategories: {
              'modems-cable': { id: 'modems-cable', name: 'Módem Cable' },
              'modems-fibra': { id: 'modems-fibra', name: 'Módem Fibra' }
            }
          }
        }
      },
      'celulares-tablets': {
        id: 'celulares-tablets',
        name: 'Celulares & Tablets',
        icon: 'smartphone',
        subsubcategories: {
          celulares: {
            id: 'celulares',
            name: 'Celulares',
            icon: 'smartphone',
            subsubcategories: {
              'celulares-gama-baja': { id: 'celulares-gama-baja', name: 'Gama Baja' },
              'celulares-gama-media': { id: 'celulares-gama-media', name: 'Gama Media' },
              'celulares-gama-alta': { id: 'celulares-gama-alta', name: 'Gama Alta' }
            }
          },
          tablets: {
            id: 'tablets',
            name: 'Tablets',
            icon: 'tablet',
            subsubcategories: {
              'tablets-8': { id: 'tablets-8', name: '8"' },
              'tablets-10': { id: 'tablets-10', name: '10"' },
              'tablets-pro': { id: 'tablets-pro', name: 'Pro' }
            }
          }
        }
      },
      'tv-proyectores': {
        id: 'tv-proyectores',
        name: 'TV & Proyectores',
        icon: 'tv',
        subsubcategories: {
          televisores: {
            id: 'televisores',
            name: 'Televisores',
            icon: 'tv',
            subsubcategories: {
              'tv-32': { id: 'tv-32', name: '32"' },
              'tv-43': { id: 'tv-43', name: '43"' },
              'tv-55': { id: 'tv-55', name: '55"' },
              'tv-65': { id: 'tv-65', name: '65"' }
            }
          },
          proyectores: {
            id: 'proyectores',
            name: 'Proyectores',
            icon: 'videocam',
            subsubcategories: {
              'proyectores-1080p': { id: 'proyectores-1080p', name: '1080p' },
              'proyectores-4k': { id: 'proyectores-4k', name: '4K' },
              'proyectores-laser': { id: 'proyectores-laser', name: 'Láser' }
            }
          }
        }
      }
    }
  },
  monitores: {
    id: 'monitores',
    name: 'Monitores',
    icon: 'desktop_windows',
    isDropdown: true,
    subcategories: {
      'monitores-24': {
        id: 'monitores-24',
        name: 'Monitores 24"',
        icon: 'desktop_windows'
      },
      'monitores-27': {
        id: 'monitores-27',
        name: 'Monitores 27"',
        icon: 'desktop_windows'
      },
      'monitores-32': {
        id: 'monitores-32',
        name: 'Monitores 32"',
        icon: 'desktop_windows'
      },
      'monitores-ultrawide': {
        id: 'monitores-ultrawide',
        name: 'Monitores Ultrawide',
        icon: 'aspect_ratio'
      },
      'monitores-portatiles': {
        id: 'monitores-portatiles',
        name: 'Monitores Portátiles',
        icon: 'tablet'
      }
    }
  },
  hardware: {
    id: 'hardware',
    name: 'Hardware',
    icon: 'build',
    isDropdown: true,
    subcategories: {
      componentes: {
        id: 'componentes',
        name: 'Componentes',
        icon: 'build',
        subsubcategories: {
          procesadores: {
            id: 'procesadores',
            name: 'Procesadores',
            icon: 'memory',
            subsubcategories: {
              'procesadores-intel': { id: 'procesadores-intel', name: 'Intel' },
              'procesadores-amd': { id: 'procesadores-amd', name: 'AMD' }
            }
          },
          'tarjetas-graficas': {
            id: 'tarjetas-graficas',
            name: 'Tarjetas Gráficas',
            icon: 'sports_esports',
            subsubcategories: {
              'tarjetas-nvidia': { id: 'tarjetas-nvidia', name: 'NVIDIA' },
              'tarjetas-amd': { id: 'tarjetas-amd', name: 'AMD' }
            }
          },
          'memorias-ram': {
            id: 'memorias-ram',
            name: 'Memorias RAM',
            icon: 'storage',
            subsubcategories: {
              'ram-8gb': { id: 'ram-8gb', name: '8GB' },
              'ram-16gb': { id: 'ram-16gb', name: '16GB' },
              'ram-32gb': { id: 'ram-32gb', name: '32GB' }
            }
          },
          ssd: {
            id: 'ssd',
            name: 'SSD',
            icon: 'storage',
            subsubcategories: {
              'ssd-256gb': { id: 'ssd-256gb', name: '256GB' },
              'ssd-512gb': { id: 'ssd-512gb', name: '512GB' },
              'ssd-1tb': { id: 'ssd-1tb', name: '1TB' }
            }
          },
          'discos-duros': {
            id: 'discos-duros',
            name: 'Discos Duros',
            icon: 'album',
            subsubcategories: {
              'discos-1tb': { id: 'discos-1tb', name: '1TB' },
              'discos-2tb': { id: 'discos-2tb', name: '2TB' },
              'discos-4tb': { id: 'discos-4tb', name: '4TB' }
            }
          },
          fuentes: {
            id: 'fuentes',
            name: 'Fuentes de Poder',
            icon: 'power',
            subsubcategories: {
              'fuentes-650w': { id: 'fuentes-650w', name: '650W' },
              'fuentes-750w': { id: 'fuentes-750w', name: '750W' },
              'fuentes-1000w': { id: 'fuentes-1000w', name: '1000W' }
            }
          }
        }
      }
    }
  },
  laptops: {
    id: 'laptops',
    name: 'Laptops',
    icon: 'laptop',
    isDropdown: true,
    subcategories: {
      'laptops-budget': {
        id: 'laptops-budget',
        name: 'Budget',
        icon: 'attach_money'
      },
      'laptops-mid-range': {
        id: 'laptops-mid-range',
        name: 'Mid-Range',
        icon: 'trending_up'
      },
      'laptops-gaming': {
        id: 'laptops-gaming',
        name: 'Gaming',
        icon: 'sports_esports'
      },
      'laptops-profesional': {
        id: 'laptops-profesional',
        name: 'Profesionales',
        icon: 'work'
      },
      macbook: {
        id: 'macbook',
        name: 'MacBook',
        icon: 'apple'
      }
    }
  }
};

export function getCategoryById(categoryId) {
  return CATEGORIES_STRUCTURE[categoryId];
}

export function getSubcategoryById(categoryId, subcategoryId) {
  const category = CATEGORIES_STRUCTURE[categoryId];
  if (!category) return null;
  return category.subcategories[subcategoryId];
}

export function getSubsubcategoryById(categoryId, subcategoryId, subsubcategoryId) {
  const subcategory = getSubcategoryById(categoryId, subcategoryId);
  if (!subcategory) return null;
  return subcategory.subsubcategories[subsubcategoryId];
}

export function getAllCategories() {
  return Object.values(CATEGORIES_STRUCTURE).map(cat => ({
    id: cat.id,
    name: cat.name,
    icon: cat.icon
  }));
}

export function getSubcategoriesByCategoryId(categoryId) {
  const category = CATEGORIES_STRUCTURE[categoryId];
  if (!category) return [];
  return Object.values(category.subcategories).map(subcat => ({
    id: subcat.id,
    name: subcat.name,
    icon: subcat.icon
  }));
}

export function getSubsubcategoriesBySubcategoryId(categoryId, subcategoryId) {
  const subcategory = getSubcategoryById(categoryId, subcategoryId);
  if (!subcategory) return [];
  return Object.values(subcategory.subsubcategories).map(subsubcat => ({
    id: subsubcat.id,
    name: subsubcat.name
  }));
}

export default CATEGORIES_STRUCTURE;
