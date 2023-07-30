import Image from "next/image";
import React from "react";

export default function productDetails({ products }) {
    console.log(products);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <Image
                    src={products.image}
                    alt="Shoes"
                    width={384}
                    height={50}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {products.productName}</h2>
                <p>price: {products.price}</p>
                <p>Category: {products.category}</p>
                <p>Status: {products.status}</p>
                <p>Description: {products.description}</p>
                <div>
                    Key Features:{" "}
                    {products.keyFeatures.map((feature) => (
                        <p key={feature}>{feature}</p>
                    ))}
                </div>
                <p>Average Rating: {products.averageRating}</p>
            </div>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(
        `http://localhost:5000/api/v1/product/${params.id}`
    );
    const data = await res.json();
    console.log(data);

    return {
        props: {
            products: data.data,
        },
    };
};
