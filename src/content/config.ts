import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  // Required SEO
  title: z.string().max(60),
  description: z.string().max(160),

  // Content metadata
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('editorial-team'),

  // Categorization
  category: z.enum([
    'guides',
    'reviews',
    'comparisons',
    'how-to',
    'safety',
    'installation'
  ]),
  tags: z.array(z.string()).default([]),

  // Content type (affects layout/schema)
  contentType: z.enum([
    'pillar',
    'supporting',
    'buyer-intent',
    'comparison',
    'tool'
  ]),

  // SEO controls
  canonicalUrl: z.string().url().optional(),
  noindex: z.boolean().default(false),

  // Social/OG
  ogImage: z.string().optional(),
  ogImageAlt: z.string().optional(),

  // Article features
  showToc: z.boolean().default(true),
  showAuthor: z.boolean().default(true),
  showRelated: z.boolean().default(true),

  // Affiliate disclosure level
  affiliateDisclosure: z.enum([
    'none',
    'minimal',
    'standard',
    'heavy'
  ]).default('standard'),

  // Internal linking
  pillarArticle: z.string().optional(),
  relatedArticles: z.array(z.string()).optional(),

  // Featured/priority
  featured: z.boolean().default(false),
  priority: z.number().min(0).max(1).default(0.5),

  // FAQ data (for schema markup)
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string()
  })).optional(),
});

const authorSchema = z.object({
  name: z.string(),
  bio: z.string(),
  avatar: z.string().optional(),
  credentials: z.array(z.string()).optional(),
  social: z.object({
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
  }).optional(),
});

export const collections = {
  articles: defineCollection({
    type: 'content',
    schema: articleSchema,
  }),
  authors: defineCollection({
    type: 'content',
    schema: authorSchema,
  }),
};
