import RestaurantCard from "./RestaurantCard";
// import resList from "../Utilis/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurant, setfilterRestaurant] = useState([]);
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
      setList(restaurant);
      setfilterRestaurant(restaurant);
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

  const handleSearch = () => {
    const filteredResults = list.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilterRestaurant(filteredResults);
  };
  return loading ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="searc-btn " onClick={handleSearch}>
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filterdRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
