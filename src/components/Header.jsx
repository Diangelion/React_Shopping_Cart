import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

/// Image
import Profile from "../assets/react.svg";

// Template
import { CartContext } from "../template/StateCartProvider";

export default function Header() {
  const { state } = useContext(CartContext);
  const totalItem = state.cartItems.length;
  const items = state.cartItems;

  const totalPrice = useMemo(() => {
    return items.reduce((accu, currentItem) => accu + currentItem.price, 0);
  }, [items]);

  const navigate = useNavigate();
  const moveToCart = () => {
    navigate("/cart");
  };

  const moveToHome = () => {
    navigate("/");
  };

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1" onClick={moveToHome}>
        <a className="btn btn-ghost normal-case text-xl">NyX</a>
      </div>
      <div className="flex-none">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-20 sm:w-64 md:w-96"
          />
        </div>
        <button id="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <div className="dropdown dropdown-end ml-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                id="shopping-cart"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{totalItem}</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{totalItem} Items</span>
              <span className="text-info">Subtotal: ${totalPrice}</span>
              <div className="card-actions">
                <button
                  className="btn btn-primary btn-block"
                  onClick={moveToCart}
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end ml-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={Profile} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
