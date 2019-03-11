import React from 'react'
import Auxs from '../hoc/Auxs/auxs'
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
               <div className="sec-space"></div>
                <PageTitle>ಮಾಹಿತಿ ಹಕ್ಕು</PageTitle>
                <main className="rti-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rti-intro">
                                    <p className="kannada">ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ಪರಿಶಿಷ್ಟ ಜಾತಿ ಮತ್ತು ಪರಿಶಿಷ್ಟ ವರ್ಗಗಳ ಆರ್ಥಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ಅಭಿವೃದ್ದಿಗಾಗಿ "ಕರ್ನಾಟಕ ಪರಿಶಿಷ್ಟ ಜಾತಿ ಮತ್ತು ಪರಿಶಿಷ್ಟ ವರ್ಗಗಳ ಅಭವೃದ್ದಿ ನಿಗಮ " ವನ್ನು 1975ನೇ ಸಾಲಿನಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾಯಿತು.ನಿಗಮವು 1956ರ ಕಂಪನಿ ಕಾಯ್ದೆಯಡಿ ಸ್ಥಾಪಿಸಲಾಯಿತು.ನಂತರ ನಿಗಮವನ್ನು 13.10.2005ರಲ್ಲಿ "ಡಾ: ಬಿ. ಆರ್. ಅಂಬೇಡ್ಕರ್ ಅಭಿವೃದ್ದಿ ನಿಗಮ" ಎಂದು ಮರು ನಾಮಕರಣ ಮಾಡಲಾಯಿತು.</p>
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
               <div className="sec-space"></div>
                <PageTitle>RTI</PageTitle>
                <main className="rti-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rti-intro">
                                    <p>The Karnataka Scheduled Castes & Scheduled Tribes Development Corporation was established by the Government of Karnataka in 1975 with the vowed objective of bringing the SCs & STs population above the poverty-line.The Corporation was incorporated under the Companies Act of 1956. The Corporation was renamed as Dr. B.R.Ambedkar Development Corporation Limited on 13-10-2005.</p>
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