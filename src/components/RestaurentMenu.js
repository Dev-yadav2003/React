import ShimmerUi from "./shimmer";
import { useParams } from "react-router-dom";
import { RECOMMENDED_IMAGE } from "../Utils/constants";
import useRestaurentMenu from "../Utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <ShimmerUi />;

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const cardFilter =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filteredCard = cardFilter.filter(
    (filterCards) =>
      filterCards?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="res-menu flex flex-col justify-start items-center ">
      <h1 className="text-xl mt-8 font-semibold ">{name}</h1>
      <div className="res-card border-4 p-4 mt-6 w-1/2 rounded-2xl bg-slate-100">
        <div className="rating-price">
          <h3 className=" font-medium">
            {avgRating + "(" + totalRatingsString + ")"}
          </h3>
          <h3 className=" font-medium">{costForTwoMessage}</h3>
        </div>

        <h4 className="font-normal text-blue-400">{cuisines.join(" , ")}</h4>
      </div>

      <div>
        {filteredCard.map((catagory) => (
          <RestaurentCategory data={catagory?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
