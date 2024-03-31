import { RiDeleteBin6Line } from "react-icons/ri";
import { quantity, sizes } from "../constant";
import Select from "./Select";
export default function CartItem({
  item: { product, qty, size },
  deleteFromCart,
}) {
  return (
    <div className="mb-4 relative dark:bg-transparent dark:text-white dark:hover:bg-night-50 bg-gray-50 space-y-2 hover:bg-[#DAFFA2] p-4 ">
      <div className="flex space-x-2">
        {/* IMG */}
        <img className="h-24 animate-float " src={`${product.src}`} />
        {/* TITLE AND DESCRIPTION */}
        <div className="space-y-2">
          <p className="font-bold">{product.title}</p>
          <p className="text-sm text-gray-400">{product.description}</p>
        </div>
        {/* PRICE */}
        <p className="font-bold">{product.price}$</p>
      </div>
      {/* //// */}
      {/* QTY ,SIZE , DELETE BUTTON */}
      <div className="flex    justify-between items-center space-x-4   ">
        {/* QTY AND SIZE */}
        <div className="flex space-x-4 pl-[7.5rem] xl:pl-32  ">
          {/* QTY */}
          <div className="space-y-1 space-x-1">
            <p className=" font-semibold">QTY</p>
            <Select
              value={qty}
              title={"QTY"}
              options={quantity}
              inCart={false}
              className={"w-14   p-1"}
            />
          </div>
          {/* SIZE */}
          <div className="space-y-1 space-x-1">
            <p className=" font-semibold">SIZE </p>
            <Select
              value={size}
              title={"SIZE"}
              options={sizes}
              inCart={false}
              className={"w-14  p-1"}
            />
          </div>
        </div>
        {/* DELETE BUTTON */}
        <div className="  right-1" onClick={() => deleteFromCart(product)}>
          <RiDeleteBin6Line size={25} className=" cursor-pointer " />
        </div>
      </div>
    </div>
  );
}
