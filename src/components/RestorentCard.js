import { CDN_urls } from "../Utils/constants";

const RestorentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="flex flex-col p-2 h-[340px] w-64 rounded-md gap-1 border items-center bg-slate-100">
      <div className="hover:scale-105 overflow-hidden ">
        <img
          className="w-60 h-44 object-cover object-center border rounded-lg"
          src={CDN_urls + cloudinaryImageId}
        />

        <h3 className="text-md font-medium">{name}</h3>
        <h4 className="text-sm w-56 overflow-hidden">{cuisines.join(",")}</h4>
        <h4 className="text-md font-normal">{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestorentCard;
