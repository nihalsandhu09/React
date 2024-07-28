import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utilis/useRestaurantMenu";
import { CDN_URL } from "../Utilis/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // const itemCards =
  //   resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
  //     (c) => c.card?.itemCards
  //   )?.card?.itemCards || [];

  // const itemCards =resInfo?.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
  const findItemCards = (resInfo) => {
    // Check if resInfo and cards exist
    if (!resInfo?.cards) return [];

    // Try to find the `itemCards` dynamically
    for (let i = 0; i < resInfo.cards.length; i++) {
      const groupedCard =
        resInfo.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      if (groupedCard) {
        for (let j = 0; j < groupedCard.length; j++) {
          if (groupedCard[j]?.card?.card?.itemCards) {
            return groupedCard[j].card.card.itemCards;
          }
        }
      }
    }

    // If not found, return an empty array
    return [];
  };

  // Use the function
  const itemCards = findItemCards(resInfo);

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
          <div className="res-menu-div" key={item.card.info.id}>
            <div className="res-menu-info">
              <h3 style={{ margin: 0 }}>{item.card.info.name} </h3> -{"Rs"}
              {item.card.info.price / 100}{" "}
            </div>
            <img
              className="res-menu-img"
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
