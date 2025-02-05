"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./shared/Navbar";

export default function Home() {
  const featuredRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = featuredRef.current?.querySelectorAll(".product-item");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);
  return (
    <div className="bg-gray-100">
      <Navbar />
      <section className="relative overflow-hidden w-full ">
        <div className=" w-full aspect-[3]  hero-image">
          <Image
            src="/hero.png"
            alt="hero"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute text-white z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h1 className="text-4xl font-bold">Hello</h1>
          <button className="px-[26px] py-1 bg-blue-500 text-white rounded">
            Add
          </button>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 mt-6 place-items-center">
          {[
            "Bitmap.png",
            "Bitmap.png",
            "Bitmap.png",
            "Bitmap.png",
            "Bitmap.png",
            "Bitmap.png",
            "Bitmap.png",
            "Bitmap.png",
          ].map((img, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center shadow-[0px_4px_10px_rgba(0,0,0,0.5)] w-full max-w-[19rem] h-96 rounded-lg"
            >
              <div className="relative w-40 h-40">
                <Image
                  src={`/${img}`}
                  alt="Category"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className=" flex flex-col justify-center gap-2">
                <p className="mt-2 text-black font-bold ">High CBD 50 Oil</p>
                <p>⭐⭐⭐⭐⭐</p>
                <div className="flex flex-row  gap-4 justify-center">
                  <p className="text-gray-500 font-bold line-through">7.5333</p>
                  <div className="h-6 w-[1px] bg-gray-400 decoration-emerald-900"></div>
                  <p className=" text-black font-bold">6</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={featuredRef} className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 mt-6">
          {["product1.jpg", "product2.jpg", "product3.jpg", "product3.jpg"].map(
            (img, index) => (
              <div
                key={index}
                className="product-item flex flex-col items-center p-4 bg-white rounded-lg shadow-md opacity-0 translate-y-4 transition-all duration-700 ease-out"
              >
                <div className="relative w-48 h-48">
                  <Image
                    src={`/${img}`}
                    alt="Product"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-2 font-semibold">Product Name</p>
                <span className="mt-1 text-gray-600">$49.99</span>
                <button className="px-4 py-2 mt-4 text-white bg-purple-600 rounded-lg">
                  Add to Cart
                </button>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
