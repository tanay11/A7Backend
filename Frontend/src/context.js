import React, { Component } from "react";
import { storeProducts, detailProduct ,shade} from "./data";


const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
      products: [],
      shades:[],
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      newProduct:detailProduct,
      modalProduct: detailProduct,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
      selectedType:"Interior",
      isRegistered:false,
      emailId:"",
      name:"",
      selectedSize:"",
      key:0,
      rang:[],
      discount:0,
      homeColor:""
    }
  
  componentDidMount() {
    this.setProducts();
    this.setShade();
  }
   
  setShade=()=>{
    let shades=[];
    shade.forEach(item => {
      shades.push(item)
    });
    this.setState(()=>{
      return { shades }
    })
  }
  setName=(title)=>{
  this.setState({
    name:title
  })
  console.log("Name in context",title)
  }

  handleColor=(e)=>{
    this.setState({
      rang: [...this.state.rang, e.currentTarget.value],
      homeColor:e.currentTarget.name
    },()=>{console.log("EveryTime I set cOLOR",this.state.rang)})
    //()=>{this.len=this.state.rang.length}
    }


    handleSelectedType = (event) =>{

      const product = this.state.products.find(item => item.id === parseInt(event.currentTarget.name))
    if(product.types){
      this.setState({
          newProduct: product[event.currentTarget.value] ,
          selectedType:event.currentTarget.value
      },()=>{console.log("meri mehnat chl jaa",this.state.newProduct)});
    }
    }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    }, this.checkCartItems);
  };
  handleSize=(event,color)=>{
    if(color){
      this.setState({
        selectedSize: "1Lit * 6 Boxes",
        key:0
    })
    }
    else{
      this.setState({
        selectedSize: event.target.value,
        key:(event.target.title-1)
    }) 
    }
     
  }
  getRegistered=(arg)=>{
    
    this.setState({
      isRegistered:arg
    })

    console.log("isregister ",this.state.isRegistered)
  }


  getItem = id => {
    console.log("Inside Get item",id)
    console.log("Inside Get item product ",this.state.products)
    const product = this.state.products.find(item => item.id === id);
    console.log("Product ",product)
    if(product.types){
      this.setState({
          newProduct: product[product.specify] ,
          selectedType:product.specify
      });
    }
    else{
      this.setState({
        newProduct: product
    });
    }
    return this.state.newProduct;
    
  };

  onChangeName=(e)=> {
    this.setState({
        name: e.target.value
    });
    
}
  onChangeEmail=(e)=> {
    this.setState({
        emailId: e.target.value
    });
  
}

generateMultipleShade= ()=>{
  
  let tempShades={...this.state.shades}  
  let cartShades=[]
  let colours=[];
  colours=[...this.state.rang]
  const arr=Object.values(tempShades)
  console.log("Inside generate shade",this.state.selectedType)
  colours.map((shadeSelected)=>{
    var f;
    var found = arr.some(function(item, index) { f = index; return item.color == shadeSelected; });
    const shade=tempShades[f]
    shade.incart=true;
    console.log("shade",shade)
    console.log("shade[this.state.selectedType].price",shade[this.state.selectedType].price)
    const price=shade[this.state.selectedType].price
    shade.count=1
    shade.total=price
    cartShades.push(shade)
  })
  this.setState(()=>{
  return {
  cart:cartShades,
  rang:[]
  }
  },this.addTotals)
  
  }


  generateShade= (id)=>{
    console.error("iske andar aaya hi nahi")
    const tempShades={...this.state.shades}  
    const colours=this.state.rang[this.state.rang.length-1];
    const arr=Object.values(tempShades)
    var f;
    var found = arr.some(function(item, index) { f = index; return item.color == colours; });
    const shade=tempShades[f]
    shade.incart=true;
    const price=shade.price
    shade.count=1
    shade.total=price
    const product = this.getItem(id)
    product.inCart = true;
    product.count = 1;
    const cost=product.Availability[this.state.key].price;
    product.price=cost;
    product.total = cost;
    product.size=this.state.selectedSize;
    this.setState(()=>{
    return {
    cart:[...this.state.cart,product,shade],
    rang:[]
    }
    },this.addTotals)
    
    }

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const product = this.getItem(id);
    console.log("Jo product aa rae",product)
    console.log("")
    product.inCart = true;
    product.count = 1;
    const amt = product.Availability[this.state.key].price;
    product.price=amt;
    product.total = amt;
    product.size=this.state.selectedSize;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
        detailProduct: { ...product }
      };
    }, this.addTotals);
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };

  incrementShade = id => {
    let tempCart = [...this.state.cart];
    
    const selectedProduct = tempCart.find(element => {
      return element.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };

  decrementShade = id => {
    console.log(id)
    
    let tempCart = [...this.state.cart];
    console.log("temp cart in context1",tempCart)
    
    const selectedProduct = tempCart.find(element => {
      return element.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;  
    if (product.count === 0) {
      this.removeShade(id);
      tempCart.splice(index,1)
        } 
        console.log("wps se tempcart",tempCart)
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };

  getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0;
    console.log("Cart at Total",this.state.cart)
    this.state.cart.map(item =>
      Array.isArray(item) ? item.map(
        color=>( 
          (subTotal += color.total) )
      ):
       (subTotal += item.total));
    const tempTax = subTotal * 0.18;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    let disc=0;

    switch(true){
      case total>=5000:{
        console.log("Ab ye case kyun ni chal raha")
        disc=0.05*total
        
      break;
      }
      case total>=10000:{
        disc=0.10*total
       
      break;
      }
      case total>=20000:{
        disc=0.20*total
       
      break;
      }
      
   }
   this.setState({
     discount:disc
   })
   const amount=total-disc
   console.log("discount",this.state.dis,disc)

    return {
      subTotal,
      tax,
      amount
    };
  };
  addTotals = () => {
    const totals = this.getTotals();
    console.log("Totasls",totals)
    


    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.amount
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    let removedProduct = this.getItem(id)
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, this.addTotals);
  };
  removeShade= id => {
    let tempCart = [...this.state.cart];
    tempCart.map((item,i)=>{
            if(item.id === id ){
              tempCart.splice(i,1)
            }
            
            this.setState(() => {
              return {
                cart: [...tempCart]
              };
            }, this.addTotals);
        })
    
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          getItem : this.getItem,
          openModal: this.openModal,
          getRegistered:this.getRegistered,
          handleSize:this.handleSize,
          generateShade:this.generateShade,
          generateMultipleShade:this.generateMultipleShade,
          onChangeEmail:this.onChangeEmail,
          onChangeName:this.onChangeName,
          closeModal: this.closeModal,
          setName:this.setName,
          increment: this.increment,
          incrementShade:this.increment,
          decrement: this.decrement,
          decrementShade:this.decrementShade,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          removeShade:this.removeShade,
          handleColor:this.handleColor,
          handleSelectedType:this.handleSelectedType,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
