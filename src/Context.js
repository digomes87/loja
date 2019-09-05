import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();


class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };

  componentDidMount(){
    this.storeProducts();
  }

  storeProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem]
    })
    this.setState(() => {
      return { products: tempProducts }
    })
  }

  handlerDetails = () => {
    console.log('detalhe do produto');
  }

  addToCart = () => {
    console.log('adicionando ao carrinho');
  }

  render() {
    return (
      <div>
        <ProductContext.Provider value={{
          ...this.state,
          handlerDetails: this.handlerDetails,
          addToCart: this.addToCart
        }}>
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider }