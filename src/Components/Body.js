import ReastaurantCard from "./RestaurantCard";
// import resList from "../Utilis/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
    // fetcanotherData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setList(
      json.data?.cards[2].card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  // const fetcanotherData = async () => {
  //   const data = await fetch(
  //     " https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   console.log(json);
  //   setList(
  //     json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
  //       .restaurants
  //   );
  // };

  console.log("Body rendered ");
  const filterTopRated = () => {
    let filterlist = list.filter((res) => res.info.avgRating > 4.5);
    setList(filterlist);
  };

  return (
    <div className="body">
      <div className="filters">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {list.map((restaurant) => (
          <ReastaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
