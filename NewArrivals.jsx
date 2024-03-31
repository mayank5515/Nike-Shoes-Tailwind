import Card from "./Card";
export default function NewArrivals({ items, onClickChangeShoe }) {
  return (
    <div className="mt-20   ">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] dark:text-white bg-center text-4xl font-extrabold select-none">
          NEW ARRIVALS
        </div>
      </div>
      <div className=" justify-between mt-10 grid grid-cols-1 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)] gap-x-4">
        {items.map((item) => (
          <Card onClickCard={onClickChangeShoe} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
