import { z } from "zod"
import data from "../data.json"

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  await new Promise(resolve => setTimeout(resolve, 1000))
  const parsedSlug = z.string().parse(slug)
  const product = data.products.find(product => product.slug === parsedSlug)
  if (!product) return Response.json({ error: 'Product not found' }, { status: 400 })
  return Response.json(product)
}
