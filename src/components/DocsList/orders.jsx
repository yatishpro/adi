import React from 'react'
import '../DocsList/orders.scss'

const Orders = (props) => {
    return (
        <div className="order">
            <div className="order-view">
                <div className="order-name">{props.name}</div>
                <div className="order-view-doc">
                    <i className="fa fa-eye"></i>
                    <p>View</p>
                </div>
            </div>
            <div className="order-download">
                <i className="fa fa-download"></i>
                <p>Download</p>
            </div>
        </div>
    )
}

export default Orders;