import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utilis/constants";
import { CDN_URL } from "../Utilis/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER"
    // );

    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // const itemCards =
  //   resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
  //     (c) => c.card?.itemCards
  //   )?.card?.itemCards || [];
  const itemCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];
  console.log(itemCards);
  return (
    <div className="menu">
      <h1 className="name">{name}</h1>
      <p className="cuisine">
        {cuisines.length > 0 ? cuisines.join(",") : "N/A"} ---- {cuisines}
        {costForTwoMessage}
      </p>
      <h4> Menu</h4>
      <ul>
        {itemCards.map((item) => (
          <div key={item.card.info.id}>
            <img src={CDN_URL + item.card.info.imageId}></img>
            {item.card.info.name} -{"Rs"}
            {item.card.info.price / 100}{" "}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
