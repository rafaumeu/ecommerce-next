export const dynamic = "force-dynamic"
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Product } from "@/data/types/product";
import { Metadata } from "next";
import Image from "next/image";
import data from "@/app/api/products/data.json";

interface ProductProps {
  params: { slug: string };
}

function getProduct(slug: string): Product {
  const product = data.products.find((p) => p.slug === slug)
  if (!product) throw new Error(`Product not found: ${slug}`)
  return product
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
  const product = getProduct(params.slug)
  return { title: product.title }
}

export default async function ProductPage({ params }: ProductProps) {
  const product = getProduct(params.slug)
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          {product.title}
        </h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            ou 12x de {`R$ ${product.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}`}
          </span>
        </div>
        <AddToCartButton />
      </div>
    </div>
  )
}
