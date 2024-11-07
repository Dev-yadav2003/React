import { useState, useEffect } from "react";
import axios from "axios";

const useRestorentList = () => {
  const [restorentList, setRestorentList] = useState([]);
  const [filteredRestaurent, setFilterRestaurent] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );

      const newData =
        response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(newData);
      setRestorentList(newData);
      setFilterRestaurent(newData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return { restorentList, filteredRestaurent, setFilterRestaurent };
};

export default useRestorentList;
