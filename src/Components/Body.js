import ReastaurantCard from "./RestaurantCard";
import resList from "../Utilis/mockData";
import { useState } from "react";

const Body = () => {
  const [list, setList] = useState(resList);

  const filterTopRated = () => {
    let filterlist = resList.filter((res) => res.info.avgRating > 4.5);
    setList(filterlist);
  };

  const RegenrateAllRes = () => {
    let list2 = resList;
    setList(list2);
  };

  return (
    <div className="body">
      <div className="filters">
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
        <button className="all-res filter-btn" onClick={RegenrateAllRes}>
          Regenrate all Res
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
