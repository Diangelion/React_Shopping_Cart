import { useContext } from "react";
import { CartContext } from "../../template/StateCartProvider";

export default function CardItemShoppingCart({ item }) {
  const { dispatch } = useContext(CartContext);
  const removeItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  };

  return (
    <div
      id={item.id}
      className="mb-10 shadow-slate-400 card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl"
    >
      <figure id="card-image-figure">
        <div id="card-image-div">
          <img src={item.images[0]} alt="Shoes" />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          <div className="badge badge-secondary">${item.price}</div>
        </h2>
        <p>{item.description}</p>
        <div className="card-actions">
          <div className="badge badge-outline p-4">{item.category.name}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={removeItem}>
            <i
              className="fa fa-trash-o"
              style={{ fontSize: "32px", color: "white" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}
