import React, { Component } from 'react'
import {Link} from 'gatsby'
import  '../Header/header.scss'
import logo from '../../images/logo.png'
import imbrambedkar from '../../images/Dr.B-R-Ambedkar.png'
import imminister from '../../images/1.png'
import imhdk from '../../images/H.D.Kumaraswamy-CM.png'
import headerBg from '../../images/header.svg'
import impar from '../../images/parameshwar.png'
import impriank from '../../images/priyank.png'
import Axus from '../../hoc/Auxs/auxs'

import { LanguageConsumer } from '../../Context/context'


class Header extends Component {

    state = {
        minSlideImg: imhdk,
        slideList: [imhdk, impar, impriank]
    }
    
    
    

    componentDidMount() {
        let i = 0;
        let list = [...this.state.slideList]

    

        this.interval = setInterval(() => { 
                   
            this.setState({
                minSlideImg: list[i]
            })

            if(list.length-1 === i){
                i = 0;
            } else{
                i++;
            }

           
    }, 3000)

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    
    headerHomeStyle = {
        backgroundColor: 'unset'
    }


    KannadaTemplate(){


        if(typeof window !== 'undefined'){
            if(window.location.pathname !== '/'){
                this.headerHomeStyle = {
                        backgroundColor: '#ea5353'
                }
                
            } else{
                this.headerHomeStyle = {
                    backgroundColor: 'unset'
            }
            }
        }

        return(
            <header style={this.headerHomeStyle} >
                <div className="top-bar">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <div className="top-bar-text">
                        <h4 className="title">ಕರ್ನಾಟಕ ಆದಿಂಬಂಬವ ಅಭಿವೃದ್ಧಿ ನಿಗಮ</h4>
                    </div>
                    <div className="minister-list">
                        <div className="member">
                            <img src={imbrambedkar} alt=""/>
                        </div>
                        <div className="member">
                            <img src={imminister} alt=""/>
                        </div>
                        <div className="member">
                            <img src={this.state.minSlideImg} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="menu-bar">
                    <div className="site-menu">
                        <div className="menu-button" onClick={this.props.menuHandler}>
                            <i className="fa fa-bars"></i>    
                        </div>
                        <div className="menu-items" style={{
                                display: this.props.menu ? 'block' : 'none'
                            }}>
                            <ul className="primary-list">
                                <li>
                                    <Link className="kannada" to="#about">ಬಗ್ಗೆ</Link>
                                </li>
                                <li className="dropdown">
                                    <a className="kannada">ಯೋಜನೆಗಳು</a>
                                    <ul className="secondary-list">
                                        <li>
                                            <Link className="kannada" to="/airavat-scheme">ಐರಾವತ ಯೋಜನೆ</Link>
                                        </li>
                                        <li>
                                            <Link className="kannada" to="/unnati-scheme">ಉನ್ನತಿ ಯೋಜನೆ</Link>
                                        </li>
                                        <li>
                                            <Link className="kannada" to="/samruddhi-scheme">ಸಮೃದ್ಧಿ ಯೋಜನೆ</Link>
                                        </li>
                                        <li>
                                            <Link className="kannada" to="/prerna-schmem">ಪ್ರೇರಣಾ ಯೋಜನೆ</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="kannada" to="/board-of-directors">ನಿರ್ದೇಶಕರ ಮಂಡಳಿ</Link>
                                </li>
                                <li>
                                    <Link className="kannada" to="/gallery">ಗ್ಯಾಲರಿ</Link>
                                </li>
                                <li>
                                    <Link className="kannada" to="/circulars">ಆದೇಶಗಳು / ಸರ್ಕ್ಯುಲರ್ಗಳು</Link>
                                </li>
                                <li>
                                    <Link className="kannada" to="/rti">ಮಾಹಿತಿ ಹಕ್ಕು</Link>
                                </li>
                                <li>
                                    <Link className="kannada" to="/contact">ಸಂಪರ್ಕಿಸಿ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="language-select">
                        <div className="language-switch"  onClick={() => this.props.languageTogle()}>
                        <h5 className="language">English</h5>
                        </div>
                    </div>
                </div>
            </header>
        )
    }




    EnglishTemplate(){


        if(typeof window !== 'undefined'){
            if(window.location.pathname !== '/'){
                this.headerHomeStyle = {
                        backgroundColor: '#ea5353'
                }
                
            } else{
                this.headerHomeStyle = {
                    backgroundColor: 'unset'
            }
            }
        }

        return(
            <header style={this.headerHomeStyle} >
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
                            <img src={this.state.minSlideImg} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="menu-bar">
                    <div className="site-menu">
                        <div className="menu-button" onClick={this.props.menuHandler}>
                            <i className="fa fa-bars"></i>    
                        </div>
                        <div className="menu-items" style={{
                                display: this.props.menu ? 'block' : 'none'
                            }}>
                            <ul className="primary-list">
                                <li>
                                    <Link to="#about">About</Link>
                                </li>
                                <li className="dropdown">
                                    <a>Schemes <i class="fa fa-angle-down"></i></a>
                                    <ul className="secondary-list">
                                        <li>
                                            <Link to="/airavat-scheme">Airavat Scheme</Link>
                                        </li>
                                        <li>
                                            <Link to="/unnati-scheme">Unnati Scheme</Link>
                                        </li>
                                        <li>
                                            <Link to="/samruddhi-scheme">Samruddhi Scheme</Link>
                                        </li>
                                        <li>
                                            <Link to="/prerna-scheme">Prerna Scheme</Link>
                                        </li>
                                    </ul>
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
                        <div className="language-switch"  onClick={() => this.props.languageTogle()}>
                        <h5 className="language">ಕನ್ನಡ</h5>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    Template() {
       return(
        <LanguageConsumer>
            {(context) => (
                (context.language === 'kannada') ? this.KannadaTemplate() : this.EnglishTemplate()
            )}
        </LanguageConsumer>
       )
    }

    render() {
     
        return(
            <Axus>
            { this.Template() }
           </Axus>
        )
    }

}



export default Header;