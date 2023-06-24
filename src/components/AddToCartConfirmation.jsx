import { useRef, useLayoutEffect, useContext, useState } from "react";
import { CartContext } from "../template/StateCartProvider";

const AddToCartConfirmation = () => {
  const elementRef = useRef(null);
  const [popupStyle, setPopupStyle] = useState({
    top: 0,
    left: 0,
    right: 0,
  });

  const calculateHeight = (width) => {
    return width * 0.5;
  };

  useLayoutEffect(() => {
    const element = elementRef.current;

    const handleResize = () => {
      const width = element.offsetWidth;
      const height = calculateHeight(width);
      element.style.height = `${height}px`;
    };

    const updatePopupPosition = () => {
      const { innerWidth, innerHeight } = window;
      const { top, left, width, height } = element.getBoundingClientRect();

      const popupLeft = Math.max(0, left);
      const popupRight = Math.max(0, innerWidth - (left + width));
      const popupTop = Math.max(0, innerHeight - (top + height));

      setPopupStyle({
        top: `${popupTop / 2}px`,
        left: `${popupLeft}px`,
        right: `${popupRight}px`,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", updatePopupPosition);
    handleResize();
    updatePopupPosition();

    const body = document.body;
    body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", updatePopupPosition);
      body.style.overflow = "initial";
    };
  }, []);

  const { state, dispatch } = useContext(CartContext);

  const handleConfirm = () => {
    dispatch({ type: "ADD_TO_CART", payload: state.confirmation.product });
    dispatch({
      type: "SET_CONFIRMATION",
      payload: { product: null, confirm: false },
    });
  };

  const handleCancel = () => {
    dispatch({
      type: "SET_CONFIRMATION",
      payload: { product: null, confirm: false },
    });
  };

  return (
    <>
      <div id="add-confirmation-overlay"></div>
      <div id="add-confirmation-container">
        <div
          id="add-confirmation"
          className="alert alert-info w-80 sm:w-1/2 lg:w-1/3 aspect-w-3 aspect-h-2 flex flex-col justify-center bg-slate-700 text-white"
          ref={elementRef}
          style={popupStyle}
        >
          <div className="font-semibold text-center">
            Are you sure add this product to Cart?
          </div>
          <div id="add-confirmation-button">
            <button
              className="w-24 rounded-full bg-slate-400 mx-3"
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button
              className="w-24 rounded-full bg-slate-400 mx-3"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartConfirmation;
