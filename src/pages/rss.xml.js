// Redirección a la versión del RSS en inglés por defecto
export async function GET({ redirect }) {
  return redirect('/en/rss.xml', 301);
}
