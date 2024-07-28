import { useEffect, useState } from "react";
import { MENU_API } from "../Utilis/constants";
const useRestaurantMenu = (resId) => {
  // fetch here

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    // const data = await fetch(
    //   "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER"
    // );

    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
