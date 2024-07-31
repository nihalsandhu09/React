import { CDN_URL } from "../Utilis/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,

    sla: { deliveryTime },
  } = resData?.info;

  // if (!resData || !resData.info) {
  //   return <div>Loading...</div>; // or return null, a spinner, or a placeholder
  // }

  return (
    <div className="res-card w-72 ">
      <img
        className="w-52 h-52"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <div className="res-info">
        <h3> {name}</h3>
        <p> {cuisines.join(",")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p>{deliveryTime + " Minutes"}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
