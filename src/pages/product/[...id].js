import React from "react";

export default function productDetails({ products }) {
    console.log(products);
    return <div>[id]</div>;
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