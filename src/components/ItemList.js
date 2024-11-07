import { RECOMMENDED_IMAGE } from "../Utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          className="border-b-2 border-gray-400 my-6 flex"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="font-medium">
              <span>{item.card.info.name}</span>
              <span className=" px-3">
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className=" mb-4 text-gray-600 ">
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <img
            className=" w-3/12 h-28 object-cover object-center mb-4"
            src={RECOMMENDED_IMAGE + item.card.info.imageId}
          />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
