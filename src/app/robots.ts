import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ecommerce-next-rafaels-projects-62f31870.vercel.app/sitemap.xml',
  }
}
