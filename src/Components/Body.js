import RestaurantCard from "./RestaurantCard";
// import resList from "../Utilis/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    // fetcanotherData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      const cardWithRestaurants = json.data?.cards?.find(
        (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      const restaurant =
        cardWithRestaurants?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setList(
        // json.data?.cards[2].card?.card?.gridElements?.infoWithStyle.restaurants
        restaurant
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
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

  const filterTopRated = () => {
    let filterlist = list.filter((res) => res.info.avgRating > 4.5);
    setList(filterlist);
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filters">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {list.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
