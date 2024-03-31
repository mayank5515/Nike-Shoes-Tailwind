import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import NewArrivals from "./components/NewArrivals";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
<BiSun />;
const FAKE_ITEMS_ARRAY = SHOE_LIST.map((shoes) => {
  return {
    product: shoes,
    size: 1,
    qty: 1,
  };
});
// console.log("FAKE ITEMS ARRAY", FAKE_ITEMS_ARRAY);
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(false);
  const [popVisible, setPopupVisible] = useState(false);
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    // console.log("hey", isDarkMode, typeof isDarkMode);
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);
  const addToCart = (product, qty, size) => {
    console.log("add to cart", product, qty, size);
    //[{product,qty,size}] -> cartItems
    if (qty && size) {
      setError(false);
      const updatedCartItems = [...cartItems];
      const existingProductIndex = cartItems.findIndex(
        (el) => el.product.id === product.id
      ); //[{product,qty,size}]
      if (existingProductIndex > -1) {
        updatedCartItems[existingProductIndex].size = size;
        updatedCartItems[existingProductIndex].qty = qty;
      } else {
        updatedCartItems.push({ product, qty, size });
      }
      setCartItems(updatedCartItems);

      // window.alert("Added to cart 🛒");
    } else {
      setError(true);
      // window.alert("Please choose qty and size 😇");
    }
  };
  const deleteFromCart = (product) => {
    const currCart = [...cartItems];
    const newCart = currCart.filter((el) => el.product.id !== product.id);
    console.log("currCart", currCart, "newCart", newCart);
    setCartItems(newCart);
  };
  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickOpen={() => setIsOpen(true)} />
      <ShoeDetail
        shoe={currentShoe}
        onclickAddToCart={addToCart}
        error={error}
      />
      <NewArrivals items={SHOE_LIST} onClickChangeShoe={setCurrentShoe} />
      <Sidebar onClickClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Cart cartItems={cartItems} deleteFromCart={deleteFromCart} />
      </Sidebar>
      <div className="fixed  bottom-4 right-4 ">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 text-white px-4 py-2 rounded-full dark:bg-white dark:text-night-50"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}
// "p-10 xl:px-24"
