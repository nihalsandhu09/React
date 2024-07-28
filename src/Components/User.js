import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(2);
  const { name } = props;

  useEffect(() => {
    // // APi Callls
    // const timer = setInterval(() => {
    //   // this wil be print again and again
    //   console.log("namaste React Op ");
    // }, 1000);
    // console.log("useEffect");
    // return () => {
    //   // to clean up interval we have to unmount this and this function is called
    //   clearInterval(timer);
    //   console.log("useEffect return ");
    // };
  }, []);

  console.log("render");

  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="user-card">
      <h1> Count = {count}</h1>
      <button onClick={increaseCount}>+</button>
      <h1> Count2 = {count2}</h1>
      <h2> Name : {name}</h2>
      <h3> Location : Una , Himachal</h3>
      <h4> Contact : nihalsandhu007220@gmail.com </h4>
    </div>
  );
};

export default User;
