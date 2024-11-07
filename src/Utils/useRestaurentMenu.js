import { useEffect, useState } from "react";
import { MENU_DATA } from "./constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const menuData = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await menuData.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurentMenu;
