import React, { Component } from "react";
import "./Shopping.css";

import List from "./List";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      list: [
        {
          item: "Bacon"
        },
        {
          item: "Watermelon"
        },

        {
          item: "Coffee"
        },
        {
          item: "Banana"
        }
      ]
    };
  }
  handleChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => {
      return {
        list: [
          ...prevState.list,
          {
            item: prevState.textInput
          }
        ],
        textInput: ""
      };
    });
  };
  render() {
    return (
      <div>
        <div className="ShoppingList-container">
          <form onSubmit={this.handleSubmit}>
            <input
              className="shopping-input"
              type="text"
              placeholder="Add item..."
              value={this.state.textInput}
              onChange={this.handleChange}
            />
          </form>
          <button
            onClick={this.handleSubmit}
            className="adding-btn"
            type="submit"
          >
            <i class="fas fa-cart-plus" />
          </button>
        </div>
        <div className="shopping-list">
          {this.state.list.map(item => (
            <List listItem={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default ShoppingList;
