import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapperContainer=styled.div`
  @media (max-width: 576px) {
    width:1170px;
  } 
`

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state={
      size:false
    }
    this.clicked=false;
    this.size=false;
    // This binding is necessary to make `this` work in the callback
    this.handlePress = this.handlePress.bind(this);
  }
  componentDidMount() {
		
    window.scrollTo(0, 0);
  }
  
  handlePress(){
    this.clicked=true;
  }
  sizeIsSelected=()=>{
    this.setState({
      size:true
    })
  }

  
  render() {

    return (
      <ProductConsumer>
        {value => {

          const {
            id,
            title,
            types,
            img,
            info,
            Availability,
            inCart,
            rang
          } = this.props.newProduct;
          
          const {key}=value.key
          return (
            <WrapperContainer>
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-3 my-2">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1> {title}</h1>
                  {types &&
                  <p> 
                  <label>
                  <input type="radio" name={id} value="Interior" onClick={value.handleSelectedType} checked={value.selectedType==="Interior"}/>{id === 9 || id===10 ? "Shine":"Interior"}
                  </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label> <input type="radio" name={id} value="Exterior" onClick={value.handleSelectedType} checked={value.selectedType==="Exterior"}/>{id === 9 || id===10 ? "Premium":"Exterior"}
                  </label>
                  </p>
                  }
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                   {id===10 || id===9 ?<div><h3>Please Select Minimum 6 shades (You can choose multiple colours)</h3><br/>
                   <p>Customisation Available (For more details Dial 8007646656 )</p></div>: <h3>Do you want to add Shades in your colour</h3>}
                <br/>
                <div onClick={this.handlePress}>
                  <button className={`${rang ? rang[rang.length-1]==="Narangi"?'button-active':'my-button':'my-button'}`} name="red" value="Narangi" onClick={value.handleColor}>
                  <img src="img/narangi.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                 
                  <button className={`${rang ? rang[rang.length-1]==="Jamuni"?'button-active':'my-button':'my-button'}`} value="Jamuni" onClick={value.handleColor}>
                  <img src="img/jamuni.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                 
                  <button className={`${rang ? rang[rang.length-1]==="Lemon"?'button-active':'my-button':'my-button'}`} value="Lemon" onClick={value.handleColor}>
                  <img src="img/lemon.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className={`${rang ? rang[rang.length-1]==="Magenta"?'button-active':'my-button':'my-button'}`} value="Magenta" onClick={value.handleColor}>
                  <img src="img/magenta.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className={`${rang ? rang[rang.length-1]==="Mayur"?'button-active':'my-button':'my-button'}`} value="Mayur" onClick={value.handleColor}>
                  <img src="img/mayur.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className={`${rang ? rang[rang.length-1]==="Maroon"?'button-active':'my-button':'my-button'}`} value="Maroon" onClick={value.handleColor}>
                  <img src="img/maroon.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                  
                  <button className={`${rang ? rang[rang.length-1]==="NagpuriOrange"?'button-active':'my-button':'my-button'}`} value="NagpuriOrange" onClick={value.handleColor}>
                  <img src="img/nagpuri orange.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className={`${rang ? rang[rang.length-1]==="Orange"?'button-active':'my-button':'my-button'}`} value="Orange" onClick={value.handleColor}>
                  <img src="img/orange.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className={`${rang ? rang[rang.length-1]==="OxfordBlue"?'button-active':'my-button':'my-button'}`} value="OxfordBlue" onClick={value.handleColor}>
                  <img src="img/oxford blue.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                 
                  <button className={`${rang ? rang[rang.length-1]==="SignalRed"?'button-active':'my-button':'my-button'}`} value="SignalRed" onClick={value.handleColor}>
                  <img src="img/signal red.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className={`${rang ? rang[rang.length-1]==="SportyYellow"?'button-active':'my-button':'my-button'}`} value="SportyYellow" onClick={value.handleColor}>
                  <img src="img/sporty yellow.png" className="img-fluid" alt="" />
                  </button> &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className={`${rang ? rang[rang.length-1]==="TerraCotta"?'button-active':'my-button':'my-button'}`} value="TerraCotta" onClick={value.handleColor}>
                  <img src="img/terracotta.png" className="img-fluid" alt="" />
                  </button> 
                  </div>
                  
                  <br/>
                  <br/>
                  <h4><i>Available Sizes</i></h4>
                  <div onClick={this.sizeIsSelected}>
                  {
                    id === 9 || id===10 ?
                    Availability.map(item=>{
                      return (<div><label><input type="radio" title={item.key} name="Size" value={item.size} onClick={(event)=>{value.handleSize(event,true)}}/>
                      {item.size}</label></div>);
                    }):
                    Availability.map(item=>{
                    return (<div><label><input type="radio" title={item.key} name="Size" value={item.size} onClick={value.handleSize}/>
                    {item.size}</label></div>);
                  })
                  }
                  </div>
                  <br/>
                  </p>
                  <br/>
                  {value.key >= 0 &&  id !=9 && id != 10 ?
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Price&nbsp; :&nbsp;  ₹ &nbsp;&nbsp;
                    <span className="text-muted lead">{Availability[value.key].price}</span>
                  </p> :null
                  }
                  <br/>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    {this.state.size?
                    <ButtonContainer
                      onClick={() => {
                        if( id !=9 && id != 10 && !this.clicked){
                        value.addToCart(id);}
                        value.openModal(id);
                        if(this.clicked){
                          id===10 || id===9 ?value.generateMultipleShade():
                          value.generateShade(id)
                        }
                      }}>
                      {inCart ? "Add more" : "add to cart"}
                    </ButtonContainer>:null}
                  </div>
                </div>
              </div>
            </div>
            </WrapperContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}
