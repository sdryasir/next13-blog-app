import Link from "next/link";
import { use } from "react";
import Image from 'next/image';
const getProducts = async () => {
    const posts = await fetch('https://fakestoreapi.com/products');
    return posts.json()
}

function truncate(str: string, n: number) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
};


function Products() {
    const productsList = use(getProducts());
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {
                        productsList.map((product: any) => {
                            return (
                                <Link key={product.id} href={`/products/${product.id}`} className="group">
                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <Image src={product.image} width={200} height={200} alt="Picture of the product" className="max-w-none h-52 mx-auto w-52 object-contain object-center group-hover:opacity-75" />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{truncate(product.title, 60)}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">$ {product.price}</p>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Products