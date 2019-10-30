import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { Link } from "react-router-dom";
import { storeProducts } from "../data";
import styled from "styled-components";
import SlideShow from "./Slider"
import { ProductConsumer } from "../context";
import { ReactComponent as ProfileIcon } from '../icons/profile.svg';
import { ReactComponent as LoginIcon } from '../icons/user.svg';
import { ReactComponent as DLIcon } from '../icons/download.svg';
import { ReactComponent as Menu } from '../icons/menu.svg';
import { About } from './About';
import axios from 'axios';

const ProductsCont = styled.div`
  display:grid;
  grid-template-columns:50% 50%;
  padding: 0 7rem;
`
const DeliveryButton = styled.button`
border: 2px solid white;
border-radius: 50px 20px;
margin-right:10px;
display:block;
@media only screen and (min-width: 543px){
    width:fit-content;
}
.carticon{
  width:15%;
  height:2%;
  @media all (min-width: 543px){
      // width: 50%;
      // height: 100%;
}
}
}
`
const DownloadBtn = styled.button`
background: transparent;
    border: none;
    color: silver;
    position: absolute;
    left: 0;
    transform: translateX(-76px);
    &:focus{
      outline:none;
    }
    @media (max-width: 543px){
    // display :none;
}
     }
  }
`
const ImageBtn = styled.button`
position: absolute;
    transform: translateX(-100%);
  }
`
const MenuButton = styled.button`
    border: none;
    background: transparent;
    color: cornflowerblue;
    transform: translateX(20%);
    width: 75%;
    &:focus{
      outline:none;
    }  
    @media (max-width: 543px){
      // transform: translateX(-30px);
      // width:100%;
      margin-left:30px;
}
}
`


const DLImages = [
  "img/shadesTree.jpg",
  "img/shineShades.jpg",
  "img/blueHouse.jpg",
  "img/stock.jpg",
  "img/howApply.jpg",
  "img/application.jpg",
  "img/Dealer&Distributor.jpg",
  "img/Dealer&Distributor2.jpg"
];
const WrapperContainer = styled.div`
  width:100%;
  overflow-x:hidden; 
  @media (max-width: 576px) {
    width:1170px;
  } 
`

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.ProductRef = React.createRef();

  }
  state = {
    products: storeProducts,
    index: 0,
    showbaji: false
  };
  componentDidMount() {

    window.scrollTo(0, 0);
  }

  onClickForward = () => {
    if (this.state.index + 1 === DLImages.length) {
      this.setState({
        index: 0
      })
    }
    else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  toggleDownload = () => {
    this.setState({
      showbaji: !this.state.showbaji
    })
    console.log("i am srate toggle", this.state.showbaji)
  }
  scrollToTopWithCallback = () => {
    this.ProductRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  onClickBackward = () => {
    if (this.state.index - 1 == -1) {
      this.setState({
        index: DLImages.length - 1
      })
    }
    else {
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <ProductWrapper>
          <WrapperContainer>
            <div className="toolbar">
              <span className="extra-btn">
                {!this.state.showbaji ? <DownloadBtn onClick={this.toggleDownload}><span><DLIcon className="menuicon" />{"  "}Application/Implementation</span></DownloadBtn> : null}
                <MenuButton onClick={this.scrollToTopWithCallback}><span><Menu className="menuicon" />{"  "}Our Products</span></MenuButton>

              </span>

              {this.state.showbaji ? <div style={{ 'display': 'flex' }}> <button className="imageBtn" onClick={this.onClickBackward}>{" << "}</button>
                <img src={DLImages[this.state.index]} alt="" /><ImageBtn className="imageBtn" onClick={this.toggleDownload}>Close</ImageBtn>
                <button className="imageBtn" onClick={this.onClickForward}>{" >> "}</button></div> : ""}
              <Link to="/register">
                <DeliveryButton><span><ProfileIcon className="carticon" />{"  "}Register</span></DeliveryButton></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/Login">
                <DeliveryButton><span><LoginIcon className="carticon" />{"  "}Login</span></DeliveryButton></Link></div>
            <SlideShow className="height-control" />
            <div ref={this.ProductRef}>
              <Title name="our" title="products" />
              <ProductsCont>
                <h3 style={{ "marginLeft": "15rem", "marginTop": "2rem", "textShadow": "2px 0 grey" }}>Interior</h3>
                <h3 style={{ "marginLeft": "15rem", "marginTop": "2rem", "textShadow": "2px 0 grey" }}>Exterior</h3>

                <ProductConsumer id="nav-id">
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </ProductsCont>
            </div>
            <About />

          </WrapperContainer>

        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
