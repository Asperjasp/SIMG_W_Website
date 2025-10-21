// Note que la configuracion esta dentro de la caarpeta content para que las subcarpeteas se consideren automaticamente contenidos
// y no hay un src/content.config.ts

import { defineCollection, z } from 'astro:content';

// Remember z is from the Zod library to provide Zod validation

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
    category: z.enum(['Research', 'Products', 'Partnerships & Outreach']).optional(),
    researchers: z.array(z.string()).optional(),
    status: z.enum(['active', 'completed', 'planned']).default('active'),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es']),
    translationKey: z.string(),
    // Opción 1: Un solo enlace externo
    link: z.string().url().optional(),
    linkText: z.string().optional(),
    // Opción 2: Múltiples enlaces externos
    links: z
      .array(
        z.object({
          url: z.string().url(),
          text: z.string()
        })
      )
      .optional(),
  })
});

// Esquema para publicaciones
const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    abstract: z.string(),
    year: z.number(),
    journal: z.string().optional(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'es']),
    translationKey: z.string(),
  })
});

// Exportar colecciones
export const collections = {
  'members': membersCollection,
  'blog': blogCollection,
  'research': researchCollection,
  'publications': publicationsCollection,
};
