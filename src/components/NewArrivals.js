"use client";
import { useState } from "react";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";

export default function NewArrivals() {
  const [likedCards, setLikedCards] = useState({});

  const toggleLike = (index) => {
    setLikedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const cards = [
    { id: 1, image: "/product1.png", alt: "Product 1" },
    { id: 2, image: "/product1.png", alt: "Product 2" },
    { id: 3, image: "/product1.png", alt: "Product 3" },
    { id: 4, image: "/product1.png", alt: "Product 4" },
    { id: 5, image: "/product1.png", alt: "Product 5" },
    { id: 6, image: "/product1.png", alt: "Product 6" },
    { id: 7, image: "/product1.png", alt: "Product 7" },
    { id: 8, image: "/product1.png", alt: "Product 8" },
  ];

  return (
    <section className="w-full bg-gray-200 py-8">
      <div className="container mx-auto text-center">
        <h2 className="mt-2 text-gray-600 font-bold">New Arrivals Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mt-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto w-full"
            >
              <div className="relative w-full h-80">
                <Image
                  src={card.image}
                  alt={card.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <button
                onClick={() => toggleLike(index)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md transition-colors"
              >
                <FiHeart
                  className={`w-6 h-6 transition-colors ${
                    likedCards[index]
                      ? "text-red-500 fill-red-500"
                      : "text-gray-500"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
        <button className="text-gray-800 border border-gray-800 rounded-3xl px-10 py-2 mt-10">
          See All
        </button>{" "}
      </div>
    </section>
  );
}
