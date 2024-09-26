import React from "react";
import ProductDetails from "../components/ProductDetails";
import Checkout from "@/app/components/Checkout";

const Slugs = ({ params }) => {
  return (
    <>
      {params.slugs.length === 1 ? (
        <ProductDetails Detail={params} />
      ) : params.slugs.length === 2 ? (
        <Checkout />
      ) : null}
    </>
  );
};

export default Slugs;
