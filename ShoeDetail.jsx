// import nike1 from "../assets/n1-min.png";
import Select from "./Select";
import { quantity } from "../constant";
import { sizes } from "../constant";
import { useState } from "react";
export default function ShoeDetail({ shoe, onclickAddToCart, error }) {
  const [form, setForm] = useState({ qty: null, size: null });
  const addToCart = () => {
    onclickAddToCart(shoe, form.qty, form.size);
    setForm({ qty: null, size: null });
  };
  return (
    <div className=" dark:text-white mt-6 flex flex-col lg:flex-row-reverse space-y-4 select-none">
      {/* SHOE IMAGE */}
      <div className=" flex-center flex-1  bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6] lg:-mt-32 lg:ml-28">
        <img src={shoe.src} className="animate-float" />
      </div>
      {/* SHOE DETAILS */}
      <div className="flex-1 space-y-6 ">
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>
        <div className="flex  space-x-6">
          <div className="font-extrabold text-3xl md:text-6xl">
            {`${shoe.price} $`}
          </div>
          {/* SELECT BuTTONS */}
          <Select
            onChange={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={quantity}
            value={form.qty}
          />
          <Select
            onChange={(size) => setForm({ ...form, size })}
            title={"SIZE"}
            options={sizes}
            value={form.size}
          />
        </div>
        {/* SHOE BUTTONS */}
        <div className="space-x-10">
          <button
            onClick={() => addToCart()}
            className="text-white h-14 w-44 btn-press-anim bg-black hover:bg-gray-900 active:bg-gray-700 dark:text-white dark:bg-black"
          >
            Add to bag
          </button>

          <a
            href="#"
            className="text-black dark:text-white underline underline-offset-4 text-lg font-bold"
          >
            View Details
          </a>
        </div>
        <div className="mt-4 mb-4">
          {error && (
            <p className="dark:text-white text-black text-2xl mt-4 ">
              Please choose QTY and SIZE !!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
