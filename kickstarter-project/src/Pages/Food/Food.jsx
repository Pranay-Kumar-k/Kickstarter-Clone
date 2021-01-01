import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { FoodCard } from "./FoodCard";

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { projects } = this.context;
    const updateState = projects.filter(
      (item) => item.category === "Food&Craft"
    );
    console.log(updateState);
    this.setState({
      data: updateState,
    });
  }
  render() {
    return (
      <div>
        <h3>Food&Craft</h3>
        <div>
          Join forces with the intrepid Foodmakers and festival creators
          changing the way stories get told on screen.
        </div>
        <div>FEATURED PROJECT</div>
        <br />
        <div>
          {this.state.data?.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
Food.contextType = DataContext;
export { Food };
