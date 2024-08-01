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
    <div className="res-card  w-96  box-border     flex flex-col items-center gap-1 justify-center mt-1  py-2 ">
      <img
        className="w-80 h-52 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <div className="text-pretty text-start  w-80">
        <h2> {name}</h2>
        <p className="text-xs"> {cuisines.join(",")}</p>
        <div className="flex justify-between">
          <p className="text-sm">
            {" "}
            <span className="text-green-900">⭐</span>
            {+avgRating}
          </p>
          <p className="text-sm">{costForTwo}</p>
        </div>
        <p>{deliveryTime + " Minutes"}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
