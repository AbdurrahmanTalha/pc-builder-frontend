import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ComponentCard({
    productName,
    image,
    category,
    price,
    status,
    averageRating,
    id,
}) {
    return (
        <Link href={`/product/${id}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <Image src={image} alt="Shoes" width={384} height={50} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>{price}</p>
                    <p>{category}</p>
                    <p>{status}</p>
                    <p>{averageRating}</p>
                </div>
            </div>
        </Link>
    );
}
