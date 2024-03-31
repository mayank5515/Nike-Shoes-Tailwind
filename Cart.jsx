import CartItem from "./CartItem";
export default function Cart({ cartItems, deleteFromCart }) {
  //   console.log("In Cart", cartItems);
  return (
    <div className="">
      <h2 className=" dark:text-white mb-10 text-2xl font-semibold">Cart</h2>
      <ul>
        {cartItems.map((cartItem) => {
          return (
            <li key={cartItem.product.id}>
              <CartItem item={cartItem} deleteFromCart={deleteFromCart} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
