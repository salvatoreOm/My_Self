import { z } from "zod";

// Portfolio data schemas
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  technologies: z.array(z.string()),
  link: z.string().optional(),
  github: z.string().optional(),
});

export const timelineItemSchema = z.object({
  id: z.string(),
  semester: z.string(),
  year: z.number(),
  courses: z.array(z.object({
    code: z.string(),
    name: z.string(),
    icon: z.string(),
  })),
  special: z.string().optional(),
});

export const locationSchema = z.object({
  id: z.string(),
  name: z.string(),
  coordinates: z.object({
    x: z.number(),
    y: z.number(),
  }),
  color: z.string(),
  description: z.string(),
});

export const mediaItemSchema = z.object({
  id: z.string(),
  type: z.enum(['spotify', 'youtube']),
  title: z.string(),
  description: z.string(),
  embedUrl: z.string(),
  thumbnail: z.string(),
});

export type Project = z.infer<typeof projectSchema>;
export type TimelineItem = z.infer<typeof timelineItemSchema>;
export type Location = z.infer<typeof locationSchema>;
export type MediaItem = z.infer<typeof mediaItemSchema>;
