import React, { Component } from 'react'

export default class ModalXemChiTiet extends Component {
    render() {
        let {viewShoes,themGioHang} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                            <div className="col-6">
                                <h3>{viewShoes.name}</h3>
                                <img src={viewShoes.image} className="img-fluid" alt="" />
                            </div>
                            <div className="col-6">
                                <h3>Products</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>name</td>
                                            <td>{viewShoes.name}</td>
                                        </tr>
                                        <tr>
                                            <td>alias</td>
                                            <td>{viewShoes.alias}</td>
                                        </tr>
                                        <tr>
                                            <td>price</td>
                                            <td>{viewShoes.price}</td>
                                        </tr>
                                        <tr>
                                            <td>description</td>
                                            <td>{viewShoes.description}</td>
                                        </tr>
                                        <tr>
                                            <td>shortDescription</td>
                                            <td>{viewShoes.shortDescription}</td>
                                        </tr>
                                        <tr>
                                            <td>quantity</td>
                                            <td>{viewShoes.quantity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close"  data-toggle="modal" data-target="#exampleModal1" onClick={() => {
                                themGioHang(viewShoes)
                            }}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
