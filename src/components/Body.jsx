import CarouselComponent from "./mainContentComponents/CarouselComponent";
import PaginatedItems from "./mainContentComponents/PaginatedItems";

export default function MainContent({ products }) {
  return (
    <>
      <CarouselComponent products={products} />
      <PaginatedItems products={products} itemsPerPage={9} />
    </>
  );
}
