"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";

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
            src="/Bitmap.png"
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

      <section className="py-12 bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 mt-6 place-items-center container m-auto">
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
              className="flex flex-col items-center gap-1  justify-center shadow-[0px_4px_10px_rgba(0,0,0,0.5)] w-full max-w-[19rem] h-96 rounded-lg "
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
      <section className="flex justify-center items-center h-40">
        <button className="see-all mt-[6rem]">See All</button>
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
                    src={"/Bitmap.png"}
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
      <section className="w-full overflow-hidden">
        <div className="flex">
          {["brand.png", "brand1.png", "brand2.png"].map((img, index) => (
            <div key={index} className="flex-1">
              <div className="relative w-full h-96">
                <Image
                  src={`/${img}`}
                  alt={`Brand ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <NewArrivals />
      <section className="w-full overflow-hidden bg-gray-200">
        <div className="flex justify-center xl:gap-32 lg:gap-12 sm:gap-8 md:gap-9 ">
          {["11.png", "11.png", "11.png", "11.png"].map((img, index) => (
            <div key={index} className="mx-2">
              <div className="relative xl:w-40 xl:h-44 lg:w-36 lg:h-40 md:w-32 md:h-36 sm:w-28 sm:h-32 w-20 h-24 ">
                <Image
                  src={`/${img}`}
                  alt={`Brand ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
