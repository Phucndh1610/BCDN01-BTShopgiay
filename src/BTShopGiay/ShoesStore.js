import React, { Component } from 'react'
import ModalGioHang from './ModalGioHang'
import ModalXemChiTiet from './ModalXemChiTiet'
import ProductList from './ProductList'

export default class ShoesStore extends Component {
    arrShoes = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
            "id": 4,
            "name": "Adidas Super Star Red",
            "alias": "adidas-super-star-red",
            "price": 465,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
            "id": 5,
            "name": "Adidas Swift Run",
            "alias": "adidas-swift-run",
            "price": 550,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
            "id": 6,
            "name": "Adidas Tenisky Super Star",
            "alias": "adidas-tenisky-super-star",
            "price": 250,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": 750,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Nike Adapt BB",
            "alias": "nike-adapt-bb",
            "price": 630,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
            "id": 10,
            "name": "Nike Air Max 97",
            "alias": "nike-air-max-97",
            "price": 650,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
            "id": 11,
            "name": "Nike Air Max 97 Blue",
            "alias": "nike-air-max-97-blue",
            "price": 450,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
            "id": 12,
            "name": "Nike Air Max 270 React",
            "alias": "nike-air-max-270-react",
            "price": 750,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        }
    ]
    state = {
        shoesDetail:{
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        cart:[]
    }
    // hàm xem chi tiết sản phẩm
    xemChiTiet = (shoes) => {
        this.setState({
            shoesDetail: shoes
        })
    }
    // giỏ hàng
    themGioHang = (spAdded) => {
        // setState
        // spead operater   
        // thêm soLuong vào cho đối tượng sp được click
        let spGioHang = { ...spAdded, "soLuong": 1 }
        // copy mảng giỏ hàng củ và mảng mới 
        let gioHangCapNhat = [...this.state.cart];
        // tìm sản phẩm được click có tồn tại trong mảng giỏ hàng chưa 
        // find():giá trị của phần tử, findIndex():trả về vị trí(index) của phần tử
        let spTK = gioHangCapNhat.find((sp) => {
            return sp.id === spGioHang.id;
        });
        // console.log(spTK);
        if (spTK) {
            // tìm thấy
            // tăng số lượng 
            spTK.soLuong += 1;
        } else {
            // chưa có trong giỏ hàng
            // thêm sp mới cho giỏ hàng
            gioHangCapNhat.push(spGioHang);
        }

        this.setState({
            cart: gioHangCapNhat
        })
    }
    // xóa giỏ hàng
    xoaGioHang = (spDeleted) => {
        let { cart } = this.state;
        // tìm vị trí của sản phẩm cần xóa trong mảng giỏ hàng
        let index = cart.findIndex((sp) => {
            return sp.id === spDeleted.id;
        });
        if (index !== -1) {
            // tìm thấy
            // xóa sản phẩm khỏi giỏ hàng
            cart.splice(index, 1);
        }
        this.setState({
            cart: cart
        })
    }
    // tăng giảm sản phẩm
    tangGiamSL = (maSPSL, soLuong) => {
        // console.log(maSPSL);
        let { cart } = this.state;
        let spTK = cart.find((sp) => {
            return maSPSL === sp.id;
        });
        if (spTK) {
            spTK.soLuong += soLuong
            if (spTK.soLuong < 1) {

                // alert("số lượng không hợp lệ");
                spTK.soLuong -= soLuong;
            }
        }

        this.setState({
            cart: cart
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col logo_agile text-center mt-3">
                        <h1><a href="#"><span>S</span>hoes shop <i className="fa fa-shopping-bag top_logo_agile_bag" aria-hidden="true" /></a></h1>
                    </div>
                </div>
                <div>
                    {/* item */}
                    <ProductList arrShoes={this.arrShoes} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang}/>
                    {/* Xem chi tiết */}
                    <ModalXemChiTiet viewShoes={this.state.shoesDetail} themGioHang={this.themGioHang} />
                    {/* giỏ hàng */}
                    <ModalGioHang  gioHang={this.state.cart} xoaGioHang={this.xoaGioHang} tangGiamSL={this.tangGiamSL}/>
                </div>
            </div>
        )
    }
}
