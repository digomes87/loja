import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonC } from "./Button"; 
import { id } from 'postcss-selector-parser';

// postcss-selector-parser
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                      <img src={img} alt="Produto" className="img-fluid"/>
                  </div>

                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>Modelo: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Fornecedor: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        Preço : <span>R$</span> {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Descrição do Produto:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/* Butao para voltar a pagina de produtos geral */}
                    <div>
                      <Link to="/">
                        <ButtonC>Voltar</ButtonC>

                        <ButtonC disabled={inCart ? true:false} onClick={()=>{
                          value.addToCart(id)
                        }}>
                          {inCart ? "Já selecionado" : "Comprar"}
                        </ButtonC>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}
