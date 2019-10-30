import React, { Component } from "react";
import CartItem from "./CartItem";
export default class CartList extends Component {
  render() {
    const { value } = this.props;
    const { cart } = this.props.value;
    return (
      <div className="container-fluid">
        {cart.map(item => (
          Array.isArray(item) ? item.map(color => (
            <CartItem key={color.id} item={color} value={value} />
          )) :
            <CartItem key={item.id} item={item} value={value} />
        ))}
      </div>
    );
  }
}
