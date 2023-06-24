import { useContext } from "react";
import { CartContext } from "../../template/StateCartProvider";

export default function CardItem({ product }) {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: "SET_CONFIRMATION", payload: { product, confirm: true } });
  };

  return (
    <div
      id={product.id}
      className="my-5 mx-3 shadow-slate-400 card w-full sm:w-80 md:w-96 bg-base-100 shadow-xl"
    >
      <figure id="card-image-figure">
        <div id="card-image-div">
          <img src={product.images[0]} alt="Shoes" />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          <div className="badge badge-secondary">${product.price}</div>
        </h2>
        <p>{product.description}</p>
        <div className="card-actions">
          <div className="badge badge-outline p-4">{product.category.name}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
