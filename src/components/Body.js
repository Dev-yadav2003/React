import React, { useEffect, useState } from "react";
import RestorentCard from "./RestorentCard";
import ShimmerUi from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useRestorentList from "../Utils/useRestorentList";

const Body = () => {
  // Local state variables
  const { restorentList, setFilterRestaurent } = useRestorentList();
  const [searchValue, setSearchValue] = useState("");
  const [filterButton, setFilterButton] = useState("Top Rated Restaurent");

  // Online status hook
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Oops! Something went wrong...</h1>;

  // Effect to filter restaurants based on search value
  useEffect(() => {
    if (searchValue === "") {
      setFilterRestaurent(restorentList); // Reset to all restaurants
    } else {
      const filteredList = restorentList.filter((res) =>
        res.info.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilterRestaurent(filteredList);
    }
  }, [searchValue, restorentList, setFilterRestaurent]); // Depend on restorentList

  // Handle top-rated filter
  const handleFilterClick = () => {
    const filteredList =
      filterButton === "Top Rated Restaurent"
        ? restorentList.filter((rest) => rest.info.avgRating > 4)
        : restorentList;

    setFilterRestaurent(filteredList);
    setFilterButton(
      filterButton === "Top Rated Restaurent"
        ? "Show All"
        : "Top Rated Restaurent"
    );
  };

  // Return loading UI if no data yet
  if (restorentList.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <div className="body">
      <div className="filter md:justify-around items-center md:flex">
        <div className="search-bar m-8 gap-4 flex">
          <input
            type="text"
            className="border px-8 py-2 w-96 outline-none rounded-md hover:bg-slate-100"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search Restaurants"
          />
          <button
            className="search-btn border py-2 px-2 rounded-md bg-teal-200 hover:bg-teal-100"
            onClick={() => {
              console.log(searchValue); // You can handle search here if needed
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn border rounded-md px-2 py-1 m-8 bg-slate-200 hover:bg-slate-100"
          onClick={handleFilterClick}
        >
          {filterButton}
        </button>
      </div>

      <div className="restorent-container flex flex-wrap justify-center gap-6 mt-12">
        {restorentList.map((restorent) => (
          <Link
            key={restorent.info.id}
            to={`/restaurent/${restorent.info.id}`}
          >
            <RestorentCard resData={restorent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
