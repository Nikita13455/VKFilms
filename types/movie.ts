import { z } from 'zod'

export const movieRaw = z.object({
    id: z.number(),
    title: z.string(),
    originalTitle: z.string(),
    language: z.string(),
    releaseYear: z.number(),
    releaseDate: z.string(),
    genres: z.array(z.string()),
    plot: z.string(),
    runtime: z.number(),
    budget: z.union([z.number(), z.string()]).nullable(),
    revenue: z.union([z.number(), z.string()]).nullable(),
    homepage: z.string().nullable(),
    status: z.string(),
    posterUrl: z.string().url(),
    backdropUrl: z.string().url().nullable(),
    trailerUrl: z.string().url(),
    trailerYouTubeId: z.string(),
    tmdbRating: z.number(),
    searchL: z.string(),
    keywords: z.array(z.string()),
    countriesOfOrigin: z.array(z.string()),
    languages: z.array(z.string()),
    cast: z.array(z.any()),
    director: z.string().nullable(),
    production: z.any().nullable(),
    awardsSummary: z.string().nullable(),
})

export const movieSchema = movieRaw.partial()

export type Movie = z.infer<typeof movieSchema>