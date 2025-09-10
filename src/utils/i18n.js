// Funciones de utilidad para internacionalización

/**
 * Detecta el idioma de una URL basándose en el patrón de ruta
 * 
 * @param {string} pathname - La ruta de la URL
 * @returns {string|null} - El código del idioma detectado ('en' o 'es') o null si no se detecta
 */
export function getLanguageFromURL(pathname) {
  if (pathname.startsWith('/es/')) {
    return 'es';
  }
  
  if (pathname.startsWith('/en/')) {
    return 'en';
  }
  
  // Si la ruta no contiene un prefijo de idioma explícito
  // podemos usar el idioma predeterminado (inglés)
  return 'en';
}

/**
 * Genera la URL alternativa para cambiar entre idiomas
 * 
 * @param {string} path - La ruta actual
 * @param {string} targetLang - El idioma objetivo ('en' o 'es')
 * @returns {string} - La URL modificada para el idioma objetivo
 */
export function getAlternateURL(path, targetLang) {
  const currentLang = path.startsWith('/es/') ? 'es' : 'en';
  
  if (currentLang === targetLang) return path;
  
  // Si cambiamos de español a inglés, eliminamos el prefijo '/es/'
  if (currentLang === 'es' && targetLang === 'en') {
    return path.replace('/es/', '/en/');
  }
  
  // Si cambiamos de inglés a español, cambiamos el prefijo '/en/' por '/es/'
  if (currentLang === 'en' && targetLang === 'es') {
    // Manejamos la página principal
    if (path === '/') return '/es/';
    return path.replace('/en/', '/es/');
  }
  
  return path;
}
