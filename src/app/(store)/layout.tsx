import { ReactNode } from 'react';
import { Header } from '../../components/header';
import { CartSidebar } from '../../components/cart-sidebar';
import { CartProvider } from '@/contexts/cart-context';

export default function StoreLayout({children}: {children: ReactNode}){

  return (
    <CartProvider>
      <div className='mx-auto grid min-h-screen w-full max-x{1600px} grid-rows-app gap-5 px-8 py-8'>
        <Header />
        {children}
      </div>
      <CartSidebar />
    </CartProvider>
  )
}
