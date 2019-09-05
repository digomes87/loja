import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext =  React.createContext();


class ProductProvider extends Component {
  state={
    products:storeProducts,
    detailProduct:detailProduct
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
            handlerDetails:this.handlerDetails,
            addToCart:this.addToCart
        }}>
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const  ProductConsumer = ProductContext.Consumer;
export {ProductConsumer, ProductProvider}