import CardItem from "./CardItem";

export default function CardItems({ currentItems }) {
  return (
    <>
      <div className="ml-8 mt-10 mb-5">
        <h1 className="mb-10">Newly Listed</h1>
        <hr />
      </div>

      <div className="flex flex-wrap sm:justify-center md:justify-between items-stretch">
        {currentItems.map((currentItem, i) => {
          return <CardItem key={i} product={currentItem} />;
        })}
      </div>
    </>
  );
}
