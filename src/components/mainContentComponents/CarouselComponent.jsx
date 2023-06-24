import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

export default function CarouselComponent({ products }) {
  const [highlightedProducts, setHighlightedProducts] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter((product) => product.price < 20);
    setHighlightedProducts(filteredProducts);
  }, [products]);

  const renderSlides = highlightedProducts.map((highlightedProduct, i) => (
    <div className="carousel-images" key={i}>
      <img src={highlightedProduct.images[0]} alt="" />
    </div>
  ));

  return (
    <>
      <Carousel
        showArrows={true}
        autoFocus={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        thumbWidth={true}
        showStatus={false}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </>
  );
}
