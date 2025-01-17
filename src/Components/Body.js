import RestaurantCard from "./RestaurantCard";
// import resList from "../Utilis/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilis/useOnlineStatus";

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
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // const data = await fetch(
      //   "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
      // );
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
    setfilterRestaurant(filterlist);
  };

  const handleSearch = () => {
    const filteredResults = list.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilterRestaurant(filteredResults);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        {" "}
        Looks like you're offline !! Please check your interent connection
      </h1>
    );
  }

  return loading ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body ">
      <div className="filter">
        <div className="search m-4 p-4 flex items-center flex-row justify-center">
          <input
            type="text"
            className=" border  rounded  px-4 w-full md:w-1/2 lg:w-1/3 h-10 outline-none bg-transparent"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 py-1 bg-green-400 m-4 text-white font-bold rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="px-2 py-1 bg-green-400 mt- text-white font-bold rounded-md flex "
            onClick={filterTopRated}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap    justify-center ">
        {filterdRestaurant.map((restaurants) => (
          <Link
            className="link"
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurants} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
