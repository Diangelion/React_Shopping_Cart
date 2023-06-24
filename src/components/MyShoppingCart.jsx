import { useContext } from "react";

// Component
import CardItemShoppingCart from "./myShoppingCartComponents/CardItemShoppingCart";

// Template
import { CartContext } from "../template/StateCartProvider";

export default function MyShoppingCart() {
  const { state, dispatch } = useContext(CartContext);
  const items = state.cartItems;

  const handleDeleteAll = () => {
    dispatch({ type: "DELETE_ALL_ITEMS" });
  };

  return (
    <div id="shopping-cart-container" className="p-5">
      <div className="flex items-center">
        <p className="mr-5">Delete All</p>
        <i
          id="delete-all-logo"
          className="fa fa-trash-o cursor-pointer p-1"
          style={{ fontSize: "1.5rem", color: "white" }}
          onClick={handleDeleteAll}
        ></i>
      </div>
      <hr className="my-5" />

      <div className="flex flex-wrap sm:justify-center md:justify-between items-stretch">
        {items.map((item, i) => {
          return <CardItemShoppingCart key={i} item={item} />;
        })}
      </div>
    </div>
  );
}
