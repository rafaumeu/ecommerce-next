"use client"

import { AddToCartButton } from "@/components/add-to-cart-button";
import { useEffect, useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/types/product";

interface ProductProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${params.slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[860px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-violet-500" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-[860px]">
        <p className="text-zinc-400">Produto nao encontrado</p>
      </div>
    );
  }

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
