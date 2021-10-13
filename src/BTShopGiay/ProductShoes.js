import React, { Component } from 'react'

export default class ProductShoes extends Component {
    render() {
        let {sp,xem,themGioHang} = this.props;
        return (
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item">
                    <img src={sp.image} alt="..." className="pro-image-front" />
                    <img src={sp.image} alt="..." className="pro-image-back" />
                    <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="link-product-add-cart" onClick={() => {
                                xem(sp)
                            }}>Quick View</a>
                        </div>
                    </div>
                    <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product">
                    <h4><a href="#" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                        xem(sp)
                    }}>{sp.name}</a></h4>
                    <div className="info-product-price">
                        <span className="item_price">{sp.price}$</span>
                    </div>
                    <div className="snipcart-details top_brand_home_details item_add single-item  button2">
                        <button className="btn style-btn" data-toggle="modal" data-target="#exampleModal1" onClick={() => {
                            themGioHang(sp)
                        }}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
