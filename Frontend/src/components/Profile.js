import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as Delivery} from '../icons/delivery.svg'

const DeliveryButton=styled.button`
width: 31%;
border: 2px solid white;
border-radius: 50px 20px;
}
`

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
 
  

  render() {
    const {name,isRegistered,modal}=this.props;
    console.log("delivering profile & isRegistered",this.props.isRegistered)
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Profile</ModalHeader>
            {isRegistered?
          <ModalBody>
           Hi {name}, Welcome to Lucian Store,You are now Eligible for our discounts.
               <span> <Delivery className="carticon"/><DeliveryButton>Call us at 8007646656</DeliveryButton></span>
          </ModalBody>:<ModalBody>Hi, Welcome to Lucian Store ,!! Sorry You are not Registered,To avail discounts{" & "}Delivery Options, Please Register yourself.</ModalBody>}
          <ModalFooter>
          {isRegistered?<Link to="/"><Button color="primary" onClick={this.props.toggle}>Shop Now</Button></Link>
           :<Link to="/register"><Button color="primary" onClick={this.props.toggle}>Register Now</Button></Link>}
          {' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
