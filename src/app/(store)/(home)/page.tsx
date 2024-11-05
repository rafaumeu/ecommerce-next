import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link href="/" className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          src="/moletom-never-stop-learning 1.png" 
          alt="" 
          width={920}
          height={920}
          quality={100}
          className="group-hover:scale-105 startTransition duration-500"
        />
        <div className="absolute bottom-28 right-28 flex items-center gap2 max-w[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full itens-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$ 249,90</span>
        </div>
      </Link>
      <Link href="/" className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          src="/moletom-java.png" 
          alt="" 
          width={920}
          height={920}
          quality={100}
          className="group-hover:scale-105 startTransition duration-500"
        />
        <div className="absolute bottom-28 right-10 flex items-center gap2 max-w[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm tr">Moletom Java</span>
          <span className="flex h-full itens-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$ 200,00</span>
        </div>
      </Link>
      <Link href="/" className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          src="/camiseta-dowhile-2022.png" 
          alt="" 
          width={920}
          height={920}
          quality={100}
          className="group-hover:scale-105 startTransition duration-500"
        />
        <div className="absolute bottom-28 right-10 flex items-center gap2 max-w[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm tr">Camiseta Dowhile</span>
          <span className="flex h-full itens-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$ 150,00</span>
        </div>
      </Link>
    </div>
  )
}
