import React from "react";
import { Card } from "flowbite-react";
import { FcRating } from "react-icons/fc";
import Link from "next/link";
import { productItems } from "../api/customapi";
export const metadata = {
  title: "Services",
};
const Services = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-2 flex-wrap ">
        {productItems.map((items, i) => (
          <Card className="max-w-sm" key={i}>
            <Link href={`/products/${i}`}>
              <img
                src={items.image}
                alt={items.title}
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </Link>
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {items.title.split(" ").slice(0, 4).join(" ")}
              </h5>
            </a>

            <div className="mb-5 mt-2.5 flex items-center">
              {Array.from({ length: items.reviews }, () => (
                <FcRating />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${items.price}
              </span>
              <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add to cart
              </a>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Services;
