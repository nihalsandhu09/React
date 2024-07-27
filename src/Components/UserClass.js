import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy Name",
        Location: "Default",
      },
    };
    console.log(this.props.name + " Child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nihalsandhu09");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
    console.log(this.props.name + "component Did Mount");
  }
  componentDidUpdate() {
    console.log("componnent Did update");
  }

  componentWillUnmount() {
    console.log("component will  unmount");
  }
  render() {
    console.log(this.props.name + "Child render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/*never update state varibales directly*/}
        <h2> Name : {name}</h2>
        <img src={avatar_url}></img>
        <h3> Location : {location}</h3>
        <h4> Contact : nihal@gmail.com </h4>
      </div>
    );
  }
}

export default UserClass;

/*****
 * Mounting lifeCycle
constructor (dummy)
render (dummy)
<HTMl Dummy>
ComponentdidMount 
<APi call>
<this.setState> -- state variale is updated 



------ Update Cycle
render(APi data)
<HTMl LOaded with APi data>
<ComponentDid Update>

*/

// Never compare you react lifecycle method  to functional component
