import ItemList from "./ItemList";
const RestaurentCategory = ({ data }) => {
  return (
    <div className=" w-[50vw] shadow-md  p-4 rounded-md border my-7 bg-gray-50 ">
      <div className="flex justify-between ">
        <span className=" font-semibold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <ItemList items={data.itemCards} />
    </div>
  );
};

export default RestaurentCategory;
