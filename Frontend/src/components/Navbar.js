import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from '../icons/logo.svg'
import { ReactComponent as Cart } from '../icons/cart.svg'
import Profile from "./Profile"

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      modal: false
    }
  }
  scrollToTopWithCallback = () => {
    this.props.footerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { name, isRegistered } = this.props;
    return (

      <Nav>
        <Logo className="icon" />

        <div className="Title">
          <Link to="/" className="nav-link">
            <img src="img/LucianPE.png" className="Lucian-img" alt="" />
          </Link>
        </div>

        {/* { this.props.name.length>0 ?<h4>Hi {this.props.name}  !!!</h4>:null} */}
        <div className="nav-icons">
          <button className="nav-btn" value="Home"><Link to="/">Home</Link></button>
          <button className="nav-btn" value="About" onClick={() => this.scrollToTopWithCallback()}>
            About
                </button>
          <button className="nav-btn" value="Profile" onClick={() => this.toggle()}>
            Profile
                </button>
          {this.state.modal ? <Profile modal={this.state.modal} name={name} isRegistered={isRegistered} toggle={this.toggle} /> : null}
          <button className="nav-btn" onClick={() => this.scrollToTopWithCallback()}>
            Contact
              </button>


          <CartButton>
            <Link to="/cart">

              <Cart className="carticon" />
              <MobSpan className="mob-window">
                {"  "} Cart</MobSpan>
            </Link>
          </CartButton>

        </div>


      </Nav>
    );
  }
}
const MobSpan = styled.span`
  @media (max-width: 543px) {
    // display:none
  }
`

const CartButton = styled.button`
width: 9%;
border: 2px solid white;
border-radius: 50px 20px;
position: absolute;
right: 1%;
@media (max-width: 543px) {
  position:unset;
  width: 30%;
  
}
.carticon{
  width:15%;
  height:2%;
  @media (max-width: 543px){
      // width: 50%;
      // height: 100%;
}
}
}
`

const Nav = styled.nav`
  background: #3E4095;
  max-height:8em;
  display:flex;
  border-bottom: 1px solid darkblue;
  .Title{
    list-style-type:none;
  }
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
    
    .Lucian-img{
      max-width: 36%;
      height: auto;
      margin-left: 20px;
      @media (max-width: 576px) {
        // max-width:200px;
        // margin-left: 0px;
      }
    }
  }
  @media (max-width: 576px) {
    width:1170px;
  } 
// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;
