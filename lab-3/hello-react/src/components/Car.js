import React from "react";

//stateful

class Wheel extends React .Component{
    render(){
        return <><p>I have 4 wheels.</p></>;
    }
}


class Car extends React.Component {
    constructor (props) {
      super(props);
      this.state = { brand : "toyota" };
    }
    changBrand = (msg)=>{
        this.setState({ brand: "Mazda"});
        alert(msg)
    };
    render(){
        return (
        <>
            <wheel />
          <p>
            My car is <span >{this.state.brand}</span>,{this.props.age}
            <br />
            Eye color is {this.props.eye}
          </p>
          <button onClick={() => this.changBrand("Hi !!")}>Click Me !! </button>
        </>
      );
    }
  }

  export default Car;