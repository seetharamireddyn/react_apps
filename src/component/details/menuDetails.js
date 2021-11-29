import React, { Component } from 'react';
class MenuDetail extends Component {
    orders = [];
    constructor(props) {
        super();
        this.state = {
            count: 0,
        }
    }

    addItem = (item) => {
        this.setState({ count: this.state.count+1})
        this.orders.push(item);
        this.props.finalOrder(item)
    }

    removeOrder = (item) => {
        this.setState({ count: this.state.count-1})

       // this.orders.splice(this.orders(item), 1)
        this.props.finalOrder(this.orders)
    }

    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return (
                    <b key={index}>{item},&nbsp;&nbsp;</b>
                )
            })
        }
    }
    renderMenu = ({ menuData }) => {
        if (menuData) {
            return menuData.map((item) => {
                return (
                    <div key={item.menu_id}>
                        <div className="col-md-7 items">
                            <b>{item.menu_id}</b> &nbsp;
                            <img src={item.menu_image} style={{ height: 80, width: 80 }} b alt="" />
                            &nbsp;&nbsp; {item.menu_name} - Rs.{item.menu_price}
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" onClick={() => { this.addItem(item) }}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button> &nbsp;
                            <span>{this.state.count}</span>&nbsp;
                            <button className="btn btn-danger" onClick={() => { this.removeOrder(item) }}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div>
                <div className="col-md-12 bg-success">
                    <h1>Item Added</h1>
                    Item Number {this.renderCart(this.orders.map((order) => {
                        return <span>{order.menu_id}</span>
                    }))} Added
                </div>
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }
}

export default MenuDetail;