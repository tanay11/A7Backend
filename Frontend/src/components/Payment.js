import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios';

const PaymentDiv=styled.div`
background-image: url(${props => props.ImagePath});
background-repeat: no-repeat;
margin: 10% 30%;
text-align: center;
border: 1px solid blue;
padding: 10% 0;
@media (max-width: 576px) {
  width:1170px;
  margin: 0px;
} 
`

export default class Payment extends Component {
  
  price=this.props.total;   
  email=this.props.email;
  product=this.props.cart;
  constructor(props) {
    super(props);


    this.state = {
      id:0,
        name: '',
        emailId: '',
        contact: '',
        location:'',
        completeAddress:'',
        zipcode:'',
        product:[],
        yes:false
    }
}


componentDidMount() {
    this.getUser()
}

onChangeContact(e) {
  this.setState({
    completeAddress: e.target.value
  });
}
handleDelivery=()=>{
  this.setState({
    yes:true
  })
}

getUser=()=>{
console.log("this.props.email",this.email)
  axios.get('http://localhost:3030/users?email='+this.props.email)
            .then(response => {
                this.setState({
                  id:response.data[0].id,
                  name:response.data[0].name,
                  emailId:response.data[0].emailId,
                  contact:response.data[0].contact,
                  location:response.data[0].location,
                  completeAddress:response.data[0].completeAddress,
                  zipcode:response.data[0].zipcode, 
                  product:response.data[0].product,
                  
                });
                console.log("get response ",response.data)
                console.log("Id for put req ",this.state.id)
              })
              .catch(function(error) {
                console.log(error)
            })
}



sendCompleteProduct=()=>{
  const newCustomer = {
    name: this.state.name,
    email: this.props.email,
    contact: this.state.contact,
    location:this.state.location,
    completeAddress:this.state.completeAddress,
    zipcode:this.state.zipcode,
    product:this.product
  }
  axios.put('http://localhost:3030/users/'+this.state.id,newCustomer)
            .then(response => {
                
                console.log("put response",this.product)
              })
              .catch(function(error) {
                console.log(error)
            })
}
  render() {

    return (

             <PaymentDiv ImagePath={this.props.ImagePath}>
               <p>For any payment related queries Contact  -  8007646656</p>
               <br/>
              <p> Do you want us to Deliver      
              <button
                  onClick={this.handleDelivery}
                    >Yes</button>
                    &nbsp;&nbsp;&nbsp;

                    <button>No</button>
                    </p>
                    <br/>
              {this.state.yes ? 
              <div className="form-group mx-sm-4 mb-4">
              <label>Enter complete address if you want delivery : </label>
              <input
                type="text"
                className="form-control"
                value={this.state.completeAddress}
                onChange={this.onChangeContact}
                placeholder="Your Complete address with pin code"
                required
              />
            </div>:null}
               
             <label>Please transfer ₹{this.props.price} to account </label>
             <div>Name  :  A7 Enterprises</div>
            <div>Acc. number - 186805001100</div>
            <div>ICICI bank bodhule nagar branch ,IFSC CODE - ICIC0001868</div>
            <div>OR</div>
            <div>Else pay Using Google Pay /Paytm / PhonePE scan and Proceed</div>
            <div> <img src="img/PaymentQR.jpg" className="img-fluid" alt="" /></div>
            <p>
              Click on this button after completing payment
            </p>
            <button
                  onClick={this.sendCompleteProduct}
                    >Click After Payment</button>
         </PaymentDiv> 
         
      );
  }
}

