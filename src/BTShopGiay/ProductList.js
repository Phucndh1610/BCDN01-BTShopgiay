import React, { Component } from 'react'
import ProductShoes from './ProductShoes'

export default class ProductList extends Component {
    renderShoesList = () => {
        let {arrShoes,xemChiTiet,themGioHang} = this.props;
        return arrShoes.map((shoes, index) => {
            return <div className="col-3 product-men mt-3" key={index}>
                <ProductShoes sp={shoes} xem={xemChiTiet} themGioHang={themGioHang}/>
            </div>
        })
    }
     
    render() {
        return (
            <div className="row mt-5">
                {this.renderShoesList()}
            </div>
        )
    }
}
