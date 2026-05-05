import { MetadataRoute } from 'next'

const BASE_URL = 'https://ecommerce-next-rafaels-projects-62f31870.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
