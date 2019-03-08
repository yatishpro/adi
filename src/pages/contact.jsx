import React from 'react'
import Auxs from '../hoc/Auxs/auxs'
import PageTitle from '../components/Page-Title/pageTitle'
import HeaderBottom from '../components/Header-Bottom/headerBottom'
import { LanguageConsumer } from '../Context/context'

const ContactPage = () => {

    function KannadaTemplate() {
        return(
        <Auxs>
            <HeaderBottom></HeaderBottom>
            <PageTitle>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</PageTitle>
            <div className="sec-space"></div>
            <main className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                            <div className="address">
                                <h3 className="address-head">ಕಾರ್ಪೊರೇಷನ್ ವಿಳಾಸ</h3>
                                <p>ಕರ್ನಾಟಕ ಆದಿ ಜಂಬವ ಅಭಿವೃದ್ಧಿ ನಿಗಮ, 2 ನೇ
                                    ಮಹಡಿ ಡಾ. ಬಾಬು ಜಗ್ಜೀವನ್ ರಾಮ್ ಲಿಡ್ಕರ್ ಭವನ, ಮಿಲ್ಲರ್ ಟ್ಯಾಂಕ್ ಬಂಡ್ ರಸ್ತೆ
                                    ಯುನಿಐ ಬಿಲ್ಡಿಂಗ್ ಎದುರು, ವಸಂತ್ ನಗರ, ಬೆಂಗಳೂರು -52
                                </p>
                            </div>

                            <div className="address">
                                <h3 className="address-head">ಸಂಪರ್ಕ ಸಂಖ್ಯೆ</h3>
                                <p> 
                                080 XXX XXXX, 080 XXX XXXX <br></br>
                                +91 XXXXXXXXXX
                                </p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            
                            <div className="address">
                                <h3 className="address-head">ಮೇಲ್ ID</h3>
                                <p>info@adijambava.com</p>
                            </div>

                            <div className="address">
                                <h3 className="address-head">ಕಚೇರಿ ಸಮಯ</h3>
                                <p> 
                                ಸೋಮವಾರದಿಂದ ಶನಿವಾರ 10.00 ರಿಂದ 5.30 ರವರೆಗೆ
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <div className="sec-space-small"></div>
        </Auxs>
        )
    }

    function EnglishTemplate() {
        return(
            <Auxs>
                <HeaderBottom></HeaderBottom>
                <PageTitle>Contact Us</PageTitle>
                <div className="sec-space"></div>
                <main className="contact-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">

                                <div className="address">
                                    <h3 className="address-head">Corporation Address</h3>
                                    <p>Karnataka Adi Jambava Development Corporation, 2nd
                                        Floor Dr.Babu Jagjivan Ram Lidkar Bhavan, Miller Tank Bund Road
                                        opposite UNI Building, Vasant Nagar, Bangalore-52
                                    </p>
                                </div>

                                <div className="address">
                                    <h3 className="address-head">Contact Number</h3>
                                    <p> 
                                    080 XXX XXXX, 080 XXX XXXX <br></br>
                                    +91 XXXXXXXXXX
                                    </p>
                                </div>

                            </div>
                            <div className="col-md-6">
                                
                                <div className="address">
                                    <h3 className="address-head">Mail ID</h3>
                                    <p>info@adijambava.com</p>
                                </div>

                                <div className="address">
                                    <h3 className="address-head">Office Timing</h3>
                                    <p> 
                                    Monday To Saturday 10.00 am to 5.30
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
                <div className="sec-space-small"></div>
            </Auxs>
        )
    }

    function Template() {
        return(
            <LanguageConsumer>
                {(context) => (
                    (context.language === "kannada") ? <KannadaTemplate/> : <EnglishTemplate/>
                )}
            </LanguageConsumer>
        )
    }

    return(
       <Template/>
    )
}

export default ContactPage;