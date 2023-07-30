import Image from "next/image";
import { Inter } from "next/font/google";
import ComponentCard from "@/components/ui/ComponentCard";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ product }) {
    console.log(product);
    const productCategories = [
        "CPU Processor",
        "Motherboard",
        "RAM",
        "Power Supply Unit",
        "Storage Device",
        "Monitor",
        "Others",
    ];
    return (
        <main>
            <h2 className="text-2xl my-[20px]">Featured Products</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-[20px]">
                {product.map((prod) => (
                    <ComponentCard
                        productName={prod.productName}
                        image={prod.image}
                        category={prod.category}
                        price={prod.price}
                        status={prod.status}
                        averageRating={prod.averageRating}
                        id={prod._id}
                        key={prod._id}
                    />
                ))}
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 mt-[30px]">
                {productCategories.map((product) => (
                    <Link
                        className="my-[10px]"
                        href={`/${product}`}
                        key={product}
                    >
                        {" "}
                        <div className="bg-blue-300 w-[300px] text-center py-[4rem] rounded-[20px] hover:cursor-pointer">
                            <h2 className="text-2xl text-white">{product}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://pc-builder-backend-tau.vercel.app/api/v1/product/getRandomProducts"
    );
    const product = await res.json();
    const { data } = product;
    return {
        props: {
            product: data,
        },
    };
}
