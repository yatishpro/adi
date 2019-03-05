import React from 'react'

import FooterCss from '../Footer/footer.module.scss'

import flone from '../../images/Govt-Of-Karnataka.png'
import fltwo from '../../images/india-gov.png'
import flthree from '../../images/pmindia-logo.png'
import flfour from '../../images/Seal-of-Karnataka.png'
import flfive from '../../images/nic.png'

const Footer = () => {
    return(
        <footer className={FooterCss.Footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className={FooterCss.footerLogos}>
                        <div className="imb-bo">
                            <img src={flone} alt=""/>
                        </div>
                        <div className="imb-bo">
                            <img src={fltwo} alt=""/>
                        </div>
                        <div className="imb-bo">
                            <img src={flthree} alt=""/>
                        </div>
                        <div className="imb-bo">
                            <img src={flfour} alt=""/>
                        </div>
                        <div className="imb-bo">
                            <img src={flfive} alt=""/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className={FooterCss.informationText}>Government of Karnataka @{new Date().getFullYear()}, All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;