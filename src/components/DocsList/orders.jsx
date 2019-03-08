import React from 'react'
import '../DocsList/orders.scss'
import { Link } from 'gatsby'
import { LanguageConsumer } from '../../Context/context';

const Orders = (props) => {

    return (
        <div className="order">
            <div className="order-view">
                <div className="order-name"><p>{props.name}</p></div>
                <div className="order-view-doc">
                    <a external target="_blank" href={props.url} >
                        <i className="fa fa-eye"></i>
                        <p>{props.view}</p>
                    </a>   
                </div>
            </div>
            <div className="order-download">
            <a href={props.url} download>
                <i className="fa fa-download"></i>
                <p>{props.download}</p>
            </a>    
        </div>
    </div>
    )


}

export default Orders;