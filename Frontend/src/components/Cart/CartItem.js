import React, { Component } from "react";
export default class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count, color, size } = this.props.item;
    const { increment, decrement, removeShade, removeItem, selectedSize, incrementShade, decrementShade } = this.props.value;

    return (
      <div className="row my-4 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </div>
        {color ?
          <div className="col-10 mx-auto col-lg-2 ">
            <span className="d-lg-none">Shade :</span> {color}
          </div> :
          <div className="col-10 mx-auto col-lg-2 ">
            <span className="d-lg-none">product :</span> {title}
          </div>}

        <div className="col-10 mx-auto col-lg-2 ">
          <strong>
            <span className="d-lg-none">Size :</span> {color ? "1 lit* 6 Boxes" : size}
          </strong>
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <strong>
            <span className="d-lg-none">price :</span> ₹{total}
          </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
          <div className="d-flex justify-content-center">
            <div>
              {color ? <span
                className="cart-btn"
                onClick={() => {
                  return decrementShade(id);
                }}
              >
                -
              </span> :
                <span
                  className="cart-btn"
                  onClick={() => {
                    return decrement(id);
                  }}
                >
                  -
          </span>
              }

              <span className="cart-btn">{count}</span>
              {color ?
                <span
                  className="cart-btn"
                  onClick={() => {
                    return incrementShade(id);
                  }}
                >
                  +
            </span> :
                <span
                  className="cart-btn"
                  onClick={() => {
                    return increment(id);
                  }}
                >
                  +
              </span>
              }
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          {color ?
            <div className=" cart-icon" onClick={() => removeShade(id)}>
              <i className="fas fa-trash" />
            </div> :
            <div className=" cart-icon" onClick={() => removeItem(id)}>
              <i className="fas fa-trash" />
            </div>}
        </div>

        <div className="col-10 mx-auto col-lg-2 ">
          <strong>item total : ₹{total} </strong>
        </div>
      </div>
    );
  }
}
