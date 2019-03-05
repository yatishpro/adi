import React from 'react'
import {Link} from 'gatsby'
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
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
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

            <div className="menu-bar">
                <div className="site-menu">
                    <div className="menu-button">
                        <i className="fa fa-bars"></i>    
                    </div>
                    <div className="menu-items">
                        <ul className="primary-list">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/schemes">Schemes</Link>
                            </li>
                            <li>
                                <Link to="/board-of-directors">Board of Directors</Link>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/circulars">Orders/Circulars</Link>
                            </li>
                            <li>
                                <Link to="/rti">RTI</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="language-select">
                
                </div>
            </div>
        </header>
    )
}

export default Header;