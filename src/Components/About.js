import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  // why did it there to make api calls
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About class Based </h1>
        <h2>This is About Page</h2>

        <UserClass
          name={"Nihal Sandhu (class)"}
          location={"UNA , himachal Pradesh"}
        />
        {/* <User /> */}
      </div>
    );
  }
}

export default About;
