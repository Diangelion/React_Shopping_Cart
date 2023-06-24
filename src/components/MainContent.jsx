import { useContext } from "react";

// Components
import Body from "./Body";
import AddToCartConfirmation from "./AddToCartConfirmation";

// Template
import { CartContext } from "../template/StateCartProvider";

export default function MainContent({ products }) {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      <div className="bg-slate-800 relative">
        <Body products={products} />
        {state.confirmation.confirm && <AddToCartConfirmation />}
      </div>
    </>
  );
}
