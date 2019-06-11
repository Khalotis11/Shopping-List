import React, { Component } from "react";
import "./Shopping.css";

class ShoppingList extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      list: []
    };
  }
  handleChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };
  render() {
    return (
      <div className="ShoppingList-container">
        <form>
          <input
            className="shopping-input"
            type="text"
            placeholder="Add item..."
            value={this.state.textInput}
            onChange={this.handleChange}
          />
        </form>
        <button className="adding-btn" type="submit">
          <i class="fas fa-cart-plus" />
        </button>
      </div>
    );
  }
}
export default ShoppingList;
