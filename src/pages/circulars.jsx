import React from 'react'
import Auxs from '../hoc/Auxs/auxs'
import HeaderBottom from '../components/Header-Bottom/headerBottom'
import PageTitle from '../components/Page-Title/pageTitle'
import OrderList from '../components/DocsList/orders'

const CircularsPage = () => {
    return(
        <Auxs>
            <HeaderBottom></HeaderBottom>
            <PageTitle>Orders / Circulars</PageTitle>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <OrderList name="GOVT. Orders 01" />
                        <OrderList name="GOVT. Orders 02" />
                        <OrderList name="GOVT. Orders 03" />
                    </div>
                </div>
            </div>
        </Auxs>
    )
}

export default CircularsPage;