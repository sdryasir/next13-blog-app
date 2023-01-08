import Image from 'next/image'
import { Inter } from '@next/font/google'
import { use } from "react";
import Link from 'next/link';
import Carousel from './components/carousel';
const inter = Inter({ subsets: ['latin'] })


const getCategories = async () => {
  const categories = await fetch('https://fakestoreapi.com/products/categories');
  return categories.json()
}
function capitalizeFirstLetter(txt:string) {
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}

export default function Home() {
  const productCategories = use(getCategories());
  return (
    <>
      <Carousel />
      <main className='container mx-auto'>
        <h1 className='text-4xl m-3'>Categories</h1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
          {
            productCategories.map((category: string, idx: number) => {
              return (
                <Link key={idx} href={`/category/${encodeURIComponent(category)}`} className='text-3xl border-2 border-r-amber-100 hover:bg-slate-300 p-5 m-3'>
                  <p>{capitalizeFirstLetter(category)}</p>
                </Link>
              )
            })
          }
        </div>
      </main>
    </>
  )
}
