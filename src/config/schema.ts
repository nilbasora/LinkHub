// src/config/schema.ts
import { z } from "zod";

export const RawLinkSchema = z.object({
  title: z.string().optional(),       // you allow missing title
  url: z.string(),                    // or z.string().url() if you want strict URLs
  icon: z.string().optional(),
});

export const RawSectionSchema = z.object({
  title: z.string(),
  // { id: { title, url, icon } }
  links: z.record(z.string(), RawLinkSchema),
});

export const RawProfileSchema = z.object({
  name: z.string(),
  avatarUrl: z.string().optional(),
  bio: z.string().optional(),
});

// social: { github: "https://...", twitter: "" }
export const RawSocialSchema = z.record(z.string(), z.string());

export const RawThemeSchema = z.object({
  name: z.string().optional(),
  options: z.record(z.string(), z.any()).optional(),
});

export const RawAnalyticsSchema = z
  .object({
    provider: z.string().optional(),
    domain: z.string().optional(),
    measurementId: z.string().optional(),
  })
  .optional();

export const RawConfigSchema = z.object({
  profile: RawProfileSchema,
  social: RawSocialSchema.optional(),
  sections: z.record(z.string(), RawSectionSchema).optional(),
  theme: RawThemeSchema.optional(),
  analytics: RawAnalyticsSchema.optional(),
});

export type RawConfig = z.infer<typeof RawConfigSchema>;
