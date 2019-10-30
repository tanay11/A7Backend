import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProceedToPay from "./ProceedToPay";
export default class CartTotals extends Component {
  constructor(props){
    super(props);
        this.state={
            payment:false
        }
        this.handlePayment = this.handlePayment.bind(this);
}
// handlePayment(){

//   console.log("state 1",this.state.payment)
//   this.setState(state =>(
//    { payment:true}),
//    console.log("state 2",this.state.payment)
//   )
// // if (payment){
// //   console.log("before  ptp")
// // return (<ProceedToPay/>)

// // }

// }
handlePayment() {
  console.log("state 1",this.state.payment)
  this.setState(() => {
    return { payment:true};
  });
  console.log("cart",this.props.value.cart)
  
}
  render() {
    
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart,
      isRegistered,
      discount,
      emailId
    } = this.props.value;
    console.log("proceed to ka value",this.props.value.emailId)
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong>₹ {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> GST  ( 18% of Bill amount ) :</span>{" "}
                  <strong>₹ {cartTax} </strong>
                </h5>
                <h5>
                  <span className="text-title" style={{color:"blue"}}>(Only ON Cart Value above>5000) Discount Offered  </span>{" "}
                  <strong>₹ {discount} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong>₹ {cartTotal} </strong>
                </h5>

                <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button" onClick={this.handlePayment}
                    >Proceed to Pay</button>  
                {
                  this.state.payment?
                   <ProceedToPay cart={this.props.value.cart} 
                                 name={this.props.value.name}
                                 cartTotal={this.props.value.cartTotal} 
                                 clearCart={this.props.value.clearCart}
                                 isRegistered={this.props.value.isRegistered}
                                 emailId={this.props.value.emailId}/>: null
                }

               
                
  </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
