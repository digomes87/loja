import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();


class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };

  componentDidMount() {
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
  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handlerDetails = (id) => {
    const product = this.getItem();
    this.setState(() => {
      return { detailProduct: product }
    })
  }

  addToCart = (id) => {
    console.log(`adicionando ao carrinho compra ${id}`);
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