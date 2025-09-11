import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Obtener publicaciones y proyectos de investigación en inglés
  const researchProjects = await getCollection('research', ({ data }) => {
    return data.lang === 'en';
  });

  const publications = await getCollection('publications', ({ data }) => {
    return data.lang === 'en';
  });

  // Combinar ambos tipos de contenido para el feed
  const allItems = [
    ...researchProjects.map(project => ({
      title: project.data.title,
      pubDate: project.data.startDate || new Date(),
      description: project.data.description,
      link: `/en/research/${project.slug}/`,
      customData: project.data.researchers 
        ? `<researchers>${project.data.researchers.join(', ')}</researchers>` 
        : '',
      categories: project.data.tags || []
    })),
    ...publications.map(pub => ({
      title: pub.data.title,
      pubDate: new Date(pub.data.year, 0, 1), // Usar el año como fecha (1 de enero del año)
      description: pub.data.abstract,
      link: pub.data.url || `/en/publications/${pub.slug}/`,
      customData: `<authors>${pub.data.authors.join(', ')}</authors>`,
      categories: pub.data.tags || []
    }))
  ];

  // Ordenar todos los items por fecha, más recientes primero
  const sortedItems = allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return rss({
    title: 'SIMG Research | RSS Feed',
    description: 'Latest research projects and publications from the SIMG Research Seminar',
    site: context.site,
    items: sortedItems,
    customData: `<language>en-us</language>`,
  });
}
