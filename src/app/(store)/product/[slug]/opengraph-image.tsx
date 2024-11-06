import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { env } from '@/env'
import { ImageResponse } from 'next/og'
import colors from "tailwindcss/colors"

 
export const runtime = 'edge'
 

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    cache: "no-store"
  })
  const product = await response.json()
  return product
}
export default async function ogImage({params}: {params: {slug: string}}) {
  const product = await getProduct(params.slug)
  const productImageUrl = new URL(product.image, env.APP_URL).toString()
  return new ImageResponse(
    (
      
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageUrl} alt='' style={{width: '100%'}}/>
      </div>
    ),
    
    {    
      ...size,
    }
  )
}