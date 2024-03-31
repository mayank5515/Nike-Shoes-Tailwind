import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "./../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
export default function Nav({ onClickOpen }) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap rounded-lg justify-between items-center z-10 relative ">
      {/* NIKE LOGO */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setIsMobileMenuShown((prev) => !prev)}
        className="lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 p-2 rounded-lg "
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* NAVBAR */}
      <div
        className={`${isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className=" lg:space-x-8  flex flex-col lg:dark:text-white lg:flex-row p-2 bg-gray-50  lg:border-none lg:bg-transparent  text-lg border  rounded-lg ">
          {ROUTES.map((el, i) => {
            return (
              <li
                className={` rounded-md py-2 px-3 lg:hover:bg-transparent hover:text-blue-500 ${i === 0 ? "text-white bg-blue-500 lg:text-blue-500 lg:bg-transparent " : "hover:bg-gray-100"} ${i === 3 || i === 4 ? "lg:text-white " : ""} cursor-pointer`}
                key={el}
              >
                {el}
              </li>
            );
          })}
        </ul>
      </div>
      {/* CART BUTTON */}
      <div
        onClick={onClickOpen}
        className=" btn-press-anim fixed bottom-4 left-4 lg:static mr-8"
      >
        <div className="flex-center shadow-md rounded-full h-12 w-12 cursor-pointer dark:text-white">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
