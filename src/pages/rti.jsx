import React from 'react'
import Auxs from '../hoc/Auxs/auxs'
import HeaderBottom from '../components/Header-Bottom/headerBottom'
import { LanguageConsumer } from '../Context/context'
import PageTitle from '../components/Page-Title/pageTitle'
import OrderList from '../components/DocsList/orders'
import Odone from '../docs/P1.pdf'
import Odtwo from '../docs/P2.pdf'
import Odthree from '../docs/P3.pdf'

const RtiPage = () => {

    function KannadaTemplate() {
        return(
            <Auxs>
                <HeaderBottom></HeaderBottom>
                <PageTitle>RTI</PageTitle>
                <main className="rti-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rti-intro">
                                ನಾಗರಿಕರಿಗೆ ಮಾಹಿತಿ ಹಕ್ಕುಗಳ ಪ್ರಾಯೋಗಿಕ ಆಡಳಿತವನ್ನು ಸಿದ್ಧಪಡಿಸಲು" ಮತ್ತು 2002 ರ ಹಿಂದಿನ ಸ್ವಾತಂತ್ರ್ಯದ ಅಧಿನಿಯಮವನ್ನು ಬದಲಿಸಲು "ಭಾರತದ ಸಂಸತ್ತಿಗೆ ಒಂದು ಕಾಯಿದೆಯಲ್ಲಿ ಮಾಹಿತಿ ಹಕ್ಕು (ಆರ್ಟಿಐ)". ಈ ಕಾನೂನು ಸಂಸತ್ತು ಜೂನ್ 15 ರಂದು ಅಂಗೀಕರಿಸಿತು. 2005 ಮತ್ತು 12 ಅಕ್ಟೋಬರ್ 2005 ರಂದು ಸಂಪೂರ್ಣವಾಗಿ ಜಾರಿಗೆ ಬಂದಿತು
                                </div>
                                <div className="sec-space-small"></div>
                                <div className="rti-form">
                                    <a href={Odone} download>
                                        <i className="fa fa-download"></i>
                                        <p>ಆರ್ಟಿಐ ಅರ್ಜಿ ನಮೂನೆ</p>
                                    </a>
                                </div>
                                <div className="sec-space"></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="rti-application">
                        <div className="sec-space-large"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">

                                    <div className="sec-space-big"></div>
                                        <h1 className="title">ಆರ್ಟಿಐ ಅರ್ಜಿ ನಮೂನೆಗಳು</h1>
                                        <div className="sec-space"></div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <OrderList name="GOVT. ಆದೇಶಗಳು 01" url={Odone} view="ನೋಟ" download="ಡೌನ್ಲೋಡ್ ಮಾಡಿ" />
                                                <OrderList name="GOVT. ಆದೇಶಗಳು 02" url={Odtwo} view="ನೋಟ" download="ಡೌನ್ಲೋಡ್ ಮಾಡಿ"  />
                                                <OrderList name="GOVT. ಆದೇಶಗಳು 03" url={Odthree} view="ನೋಟ" download="ಡೌನ್ಲೋಡ್ ಮಾಡಿ"  />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                       <div className="sec-space-big"></div>    
                    </div>
                    <div className="sec-space-small"></div>
                </main>
            </Auxs>
        )
    }

    function EnglishTemplate() {
        return(
            <Auxs>
                <HeaderBottom></HeaderBottom>
                <PageTitle>RTI</PageTitle>
                <main className="rti-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rti-intro">
                                    Right to Information (RTI) in an Act to the Parliament of India "to provide for setting out the practical regime of right to information for citizens" and replaces the erstwhile Freedom of information Act, 2002. This law was passed by Parliament on 15 June 2005 and came fully into force on 12 October 2005
                                </div>
                                <div className="sec-space-small"></div>
                                <div className="rti-form">
                                    <a href={Odone} download>
                                        <i className="fa fa-download"></i>
                                        <p>RTI Application Form</p>
                                    </a>
                                </div>
                                <div className="sec-space"></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="rti-application">
                        <div className="sec-space-large"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">

                                    <div className="sec-space-big"></div>
                                        <h1 className="title">RTI Application Forms</h1>
                                        <div className="sec-space"></div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <OrderList name="GOVT. Orders 01" url={Odone} view="view" download="download" />
                                                <OrderList name="GOVT. Orders 02" url={Odtwo} view="view" download="download"  />
                                                <OrderList name="GOVT. Orders 03" url={Odthree} view="view" download="download"  />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                       <div className="sec-space-big"></div>    
                    </div>
                    <div className="sec-space-small"></div>
                </main>
            </Auxs>
        )
    }

    function Template() {
        return(
            <LanguageConsumer>
                {(context) => (
                    (context.language === 'kannada') ? <KannadaTemplate/> : <EnglishTemplate/>
                )}
            </LanguageConsumer>
        )
    }

    return(
       <Template/>
    )
}

export default RtiPage;