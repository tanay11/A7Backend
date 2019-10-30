import React from "react";
import styled from "styled-components";

const WrapperContainer=styled.div`
  @media (max-width: 576px) {
    width:1170px;
  } 
`


export default function EmptyCart() {
  return (
    <WrapperContainer>
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-capitalize">
          <h1>your cart is currently empty</h1>
        </div>
      </div>
    </div>
    </WrapperContainer>
  );
}
