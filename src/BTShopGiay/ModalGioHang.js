import React, { Component } from 'react'

export default class ModalGioHang extends Component {
    renderGioHang = () => {
        let {gioHang,xoaGioHang,tangGiamSL} = this.props;
        return gioHang.map((shoes, index) => {
            return <tr key={index}>
                <td>
                    {shoes.id}
                </td>
                <td>    
                    {shoes.name}
                </td>
                <td style={{ width: "100px" }}>
                    <img className="img-fluid" src={shoes.image} alt="..." />
                </td>
                <td>
                    <button className="btn btn-info" onClick={() => {
                        tangGiamSL(shoes.id,1)
                    }}>+</button>
                    <span>{shoes.soLuong}</span>
                    <button className="btn btn-info" onClick={() => {
                        tangGiamSL(shoes.id,-1)
                    }}>-</button>
                </td>
                <td>
                    {shoes.price.toLocaleString()}
                </td>
                <td>
                    {(shoes.soLuong*shoes.price).toLocaleString()}
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        xoaGioHang(shoes)
                    }}>xóa</button>
                </td>
            </tr>
        })
    }
    
    render() {
        return (
            <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel1">Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Bill</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderGioHang()}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
