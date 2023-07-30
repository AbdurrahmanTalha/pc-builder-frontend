import ComponentCard from "@/components/ui/ComponentCard";
import { useRouter } from "next/router";
import React from "react";

export default function ProductCategory({ products }) {
    return (
        <main>
            <h2 className="text-2xl my-[20px]">Products</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-[20px]">
                {products.map((prod) => (
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
        </main>
    );
}

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(
        `https://pc-builder-backend-tau.vercel.app/api/v1/product/getProductByCategory/${params.id}`
    );
    const data = await res.json();
    console.log(data);

    return {
        props: {
            products: data.data,
        },
    };
};
