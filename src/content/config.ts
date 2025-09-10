import { defineCollection, z } from 'astro:content';

// Esquema para miembros
const membersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    image: z.string().optional(),
    order: z.number().default(99), // Para ordenar los miembros
    lang: z.enum(['en', 'es']), // Idioma del contenido
    translationKey: z.string(), // Clave para relacionar contenido en diferentes idiomas
  })
});

// Esquema para publicaciones científicas
const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    abstract: z.string(),
    journal: z.string().optional(),
    conference: z.string().optional(),
    year: z.number(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es']),
    translationKey: z.string(),
  })
});

// Esquema para entradas de blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    image: z.string().optional(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es']),
    translationKey: z.string(),
  })
});

// Esquema para investigaciones
const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    researchers: z.array(z.string()).optional(),
    status: z.enum(['active', 'completed', 'planned']).default('active'),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es']),
    translationKey: z.string(),
  })
});

// Exportar colecciones
export const collections = {
  'members': membersCollection,
  'publications': publicationsCollection,
  'blog': blogCollection,
  'research': researchCollection,
};
