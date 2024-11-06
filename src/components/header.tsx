import Link from "next/link";
import {Search, ShoppingBag} from "lucide-react";
import Image from "next/image";
import { CartWidget } from './cart-widget';
export async function Header() {
   return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">devstore</Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500"></Search>
          <input placeholder="buscar produtos..." className="flex-1 bg-transparent outline-none text-sm placeholder:text-zinc-500 " type="text" />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-700"/>
        <Link href="/" className="flex items-center gap-3 hover:underline">
          <span className="text-sm">Account</span>
          <Image src="https://github.com/rafaumeu.png" alt=""className="h-6 w-6 rounded-full" width={24} height={24} />
        </Link>
      </div>
    </div>
   )
}