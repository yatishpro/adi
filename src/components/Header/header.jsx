import React, { Component } from 'react'
import {Link} from 'gatsby'
import  '../Header/header.scss'
import logo from '../../images/logo.png'
import imbrambedkar from '../../images/Dr.B-R-Ambedkar.png'
import imminister from '../../images/misister.png'
import imhdk from '../../images/H.D.Kumaraswamy-CM.png'
import imka from '../../images/ka.svg'
import imen from '../../images/en.svg'
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

    KannadaTemplate(){
        return(
            <header>
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
                                    <Link to="#about">ಬಗ್ಗೆ</Link>
                                </li>
                                <li className="dropdown">
                                    <Link to="/schemes">ಯೋಜನೆಗಳು</Link>
                                    <ul className="secondary-list">
                                        <li>
                                            <Link to="/schemes">ಯೋಜನೆಗಳು</Link>
                                        </li>
                                        <li>
                                            <Link to="/">ಯೋಜನೆಗಳು</Link>
                                        </li>
                                        <li>
                                            <Link to="/gallery">ಯೋಜನೆಗಳು</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">ಯೋಜನೆಗಳು</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/board-of-directors">ನಿರ್ದೇಶಕರ ಮಂಡಳಿ</Link>
                                </li>
                                <li>
                                    <Link to="/gallery">ಗ್ಯಾಲರಿ</Link>
                                </li>
                                <li>
                                    <Link to="/circulars">ಆದೇಶಗಳು / ಸರ್ಕ್ಯುಲರ್ಗಳು</Link>
                                </li>
                                <li>
                                    <Link to="/rti">RTI</Link>
                                </li>
                                <li>
                                    <Link to="/contact">ಸಂಪರ್ಕಿಸಿ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="language-select">
                        <div className={this.props.lang === 'kannada' ? 'kannada active' : 'kannada' } onClick={() => this.props.languageHandler('kannada')}>
                        <img src={imka} alt=""/>
                        </div>
                        <div className={this.props.lang === 'english' ? 'english active' : 'english' } onClick={() => this.props.languageHandler('english')}>
                            <img src={imen} alt=""/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    EnglishTemplate(){
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
                                    <Link to="/schemes">Schemes</Link>
                                    <ul className="secondary-list">
                                        <li>
                                            <Link to="/schemes">Scheme One</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Scheme Two</Link>
                                        </li>
                                        <li>
                                            <Link to="/gallery">Scheme Three</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Scheme Four</Link>
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
                        <div className={this.props.lang === 'kannada' ? 'kannada active' : 'kannada' } onClick={() => this.props.languageHandler('kannada')}>
                        <img src={imka} alt=""/>
                        </div>
                        <div className={this.props.lang === 'english' ? 'english active' : 'english' } onClick={() => this.props.languageHandler('english')}>
                            <img src={imen} alt=""/>
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