import React from 'react'

import  '../Header/header.scss'
import logo from '../../images/logo.png'
import imbrambedkar from '../../images/Dr.B-R-Ambedkar.png'
import imminister from '../../images/misister.png'
import imhdk from '../../images/H.D.Kumaraswamy-CM.png'

const Header = () => {
    return(
        <header>
            <div className="top-bar">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="top-bar-text">
                    <h4 className="title">Karnataka Adijambava Development Corporation</h4>
                </div>
                <div className="minister-list">
                    <div className="member">
                        <img src={imbrambedkar} alt=""/>
                    </div>
                    <div className="member">
                        <img src={imminister} alt=""/>
                    </div>
                    <div className="member">
                        <img src={imhdk} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;