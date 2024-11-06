import data from "../data.json"
export async function GET() {
  await new Promise (resolve => setTimeout(resolve, 5000))
  const featuredProducts = data.products.filter((product) => product.featured)
  return Response.json(featuredProducts)
}