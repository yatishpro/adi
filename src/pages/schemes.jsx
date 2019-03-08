import React from 'react'
import Auxs from '../hoc/Auxs/auxs'
import HeaderBottom from '../components/Header-Bottom/headerBottom'
import { LanguageConsumer } from '../Context/context'
import Iconbox from '../components/Icon-Box/iconbox'
import carImg from '../images/car1.jpg'
import olaCar from '../images/car.jpg'
import keyIcon from '../images/icon.svg'
import percentIcon from '../images/icon02.svg'
import locationIcon from '../images/icon03.svg'
import babyIcon from '../images/icon04.svg'

 
const SchemesPage = () => {

    let keyIconContent = `The Scheduled Caste unemployed, licensed young ladies who have a small motor vehicle license make the taxpayers the owner of the "irrigation scheme" in collaboration with "Ola"/"Uber"`;
    let percentIconContent = `Component Cost The scheme will be subsidized by the corporation for up to 50% will be implemented by the bank / financial institution / benificiary subsidy.`;
    let locationIconContent = `Component Cost The scheme will be subsidized by the corporation for up to 50% will be implemented by the bank / financial institution / benificiary subsidy.`;
    let babyIconContent = `The Scheduled Caste unemployed, licenced young ladies who have a small motor vehicle licence make the taxpayers the owner of the "irrigation scheme" in collaboration with "Ola"/"Uber"`;

    let keyIconContentKannada = `ಕಾಂಪೊನೆಂಟ್ ಕಾಸ್ಟ್ ನಿಗಮದಿಂದ 50% ವರೆಗೆ ಯೋಜನೆಯು ಅನುದಾನವನ್ನು ಬ್ಯಾಂಕ್ / ಹಣಕಾಸು ಸಂಸ್ಥೆ / ಬೆನಿಫಿಡಿಯರಿ ಸಬ್ಸಿಡಿಯಿಂದ ಅನುಷ್ಠಾನಗೊಳಿಸಲಾಗುವುದು.`;
    let percentIconContentKannada = `ಕಾಂಪೊನೆಂಟ್ ಕಾಸ್ಟ್ ನಿಗಮದಿಂದ 50% ವರೆಗೆ ಯೋಜನೆಯು ಅನುದಾನವನ್ನು ಬ್ಯಾಂಕ್ / ಹಣಕಾಸು ಸಂಸ್ಥೆ / ಬೆನಿಫಿಡಿಯರಿ ಸಬ್ಸಿಡಿಯಿಂದ ಅನುಷ್ಠಾನಗೊಳಿಸಲಾಗುವುದು.`;
    let locationIconContentKannada = `ಕಾಂಪೊನೆಂಟ್ ಕಾಸ್ಟ್ ನಿಗಮದಿಂದ 50% ವರೆಗೆ ಯೋಜನೆಯು ಅನುದಾನವನ್ನು ಬ್ಯಾಂಕ್ / ಹಣಕಾಸು ಸಂಸ್ಥೆ / ಬೆನಿಫಿಡಿಯರಿ ಸಬ್ಸಿಡಿಯಿಂದ ಅನುಷ್ಠಾನಗೊಳಿಸಲಾಗುವುದು.`;
    let babyIconContentKannada = `ಕಾಂಪೊನೆಂಟ್ ಕಾಸ್ಟ್ ನಿಗಮದಿಂದ 50% ವರೆಗೆ ಯೋಜನೆಯು ಅನುದಾನವನ್ನು ಬ್ಯಾಂಕ್ / ಹಣಕಾಸು ಸಂಸ್ಥೆ / ಬೆನಿಫಿಡಿಯರಿ ಸಬ್ಸಿಡಿಯಿಂದ ಅನುಷ್ಠಾನಗೊಳಿಸಲಾಗುವುದು.`;



    function KannadaTemplate() {
        return(
            <Auxs>
                <HeaderBottom></HeaderBottom>
                <main className="schemes">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="schemIntoImg">
                                    <img src={carImg} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="content">
                                    <h3 className="title">ಐರಾವತ</h3>
                                    <p>ಪರಿಶಿಷ್ಟ ಜಾತಿ ನಿರುದ್ಯೋಗಿಗಳು, ಪರವಾನಗಿ ಹೊಂದಿದ ಯುವತಿಯರು ಸಣ್ಣ ಮೋಟಾರು ವಾಹನ ಪರವಾನಗಿ ಹೊಂದಿದ್ದು, ತೆರಿಗೆದಾರರಿಗೆ "ನೀರಾವರಿ ಯೋಜನೆ" ಯ ಮಾಲೀಕರಾಗಿ <b> "ಓಲಾ" / "ಉಬರ್" ಸಂಸ್ಥೆಗಳ ಸಹಯೋಗದೊಂದಿಗೆ ಮಾಡುತ್ತಾರೆ. </b> ಕರ್ನಾಟಕ ರಾಜ್ಯವು ಅಂತಾರಾಷ್ಟ್ರೀಯ ಪ್ರವಾಸಿ ತಾಣವಾಗಿ ಮತ್ತು ಈ ಯೋಜನೆಗೆ ಹೆಚ್ಚಿನ ಬೇಡಿಕೆ ಇದೆ.</p>
                                    <p>ಕಾಂಪೊನೆಂಟ್ ವೆಚ್ಚ: ಯೋಜನೆಯು <b> 50% / ಪ್ರಾಜೆಕ್ಟ್ಗೆ 5.00 ಲಕ್ಷದ ಗರಿಷ್ಠ ಮೊತ್ತದವರೆಗೆ ನಿಗಮದಿಂದ ಸಬ್ಸಿಡಿ ಮಾಡಲಾಗುವುದು. </b> ಉಳಿದಿರುವ <b> 50% </ b> ಅನ್ನು ಅನುಷ್ಠಾನಗೊಳಿಸಲಾಗುತ್ತದೆ. ಬ್ಯಾಂಕ್ / ಹಣಕಾಸು ಸಂಸ್ಥೆ / ಫಲಾನುಭವಿ ಸಬ್ಸಿಡಿ.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-space"></div>
                                <div className="content-middle">
                                    <h3 className="title">ಏಕೆ ಐರಾವತ ?</h3>
                                    <div className="sec-space"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Iconbox image={keyIcon} content={keyIconContentKannada} />
                                <Iconbox image={locationIcon} content={locationIconContentKannada} />
                            </div>
                            <div className="col-md-6">
                                <Iconbox image={percentIcon} content={percentIconContentKannada} />
                                <Iconbox image={babyIcon} content={babyIconContentKannada} />
                            </div>
                        </div>
                        
                    </div>
                    <div className="full-width">
                        <div className="sec-space-big"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sec-space-big"></div>
                                            <div className="common-content">
                                                <h2 className="title">ಸಾಮಾನ್ಯ ಅರ್ಹತೆ</h2>
                                                <ul>
                                                    <li>ಅರ್ಜಿದಾರರು ಪರಿಶಿಷ್ಟ ಜಾತಿಗೆ ಸೇರಿರಬೇಕು.</li>
                                                    <li>ಕರ್ನಾಟಕ ರಾಜ್ಯ ನಿವಾಸಿ.</li>
                                                    <li>ಅರ್ಜಿದಾರರು 21 ವರ್ಷದಿಂದ 50 ವರ್ಷ ವಯಸ್ಸಿನವರಾಗಿರಬೇಕು.</li>
                                                    <li>ಬೆಳಕಿನ ವಾಹನ ಪರವಾನಗಿ ಇರಬೇಕು.</li>
                                                    <li>ಅರ್ಜಿದಾರರ ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯ ರೂ. 50,000 / -.</li>
                                                    <li>ಅರ್ಜಿದಾರ / ಕುಟುಂಬದ ಯಾವುದೇ ಸದಸ್ಯರು ಹಿಂದೆ ರೂ. 1,00,000 / - ಕಾರ್ಪೊರೇಷನ್ / ಸರ್ಕಾರದಿಂದ, ಅಂತಹ ಫಲಾನುಭವಿಗಳು ಈ ಸೌಲಭ್ಯಕ್ಕೆ ಅರ್ಹರಾಗುವುದಿಲ್ಲ.</li>
                                                </ul>
                                            </div>
                                        <div className="sec-space-big"></div>
                                    </div>
                                </div>
                            </div>
                        <div className="sec-space-big"></div>    
                    </div>
                    <div className="condition-area">
                        <div className="sec-space-big"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                <div className="sec-space-big"></div>
                                    <div className="conditions">
                                        <h3 className="title">ನಿಯಮಗಳು</h3>
                                        <ol>
                                            <li>ಸೌಲಭ್ಯವನ್ನು ಪಡೆಯಲು "Ola" / "Uber" / "Meru" ಕಂಪನಿಗಳೊಂದಿಗೆ ಸಂಬಂಧ ಹೊಂದಲು ನಿಮಗೆ ಸಾಧ್ಯವಾಗುತ್ತದೆ</li>
                                            <li>ಆಯ್ಕೆ ಸಮಿತಿಯಿಂದ ಅಭ್ಯರ್ಥಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕು. ಆಯ್ದ ಫಲಾನುಭವಿ ಟ್ಯಾಕ್ಸಿ ಫಾರ್ಮ್ ಓಲಾ / ಉಬರ್ ಅನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ವಹಿಸಲು ಜ್ಞಾನ ರಿಸೀಟ್ಟ್ ಪ್ರೋಗ್ರಾಂಗೆ ಹಾಜರಾಗಬೇಕು</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="conditions-img">
                                        <img src={olaCar} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sec-space"></div>
                    <div className="sec-space-big"></div>
                </main>
            </Auxs>
        )
    }

    function EnglishTemplate() {
        return(
            <Auxs>
                <HeaderBottom></HeaderBottom>
                <main className="schemes">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="schemIntoImg">
                                    <img src={carImg} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="content">
                                    <h3 className="title">Airavat Plan</h3>
                                    <p>The Scheduled Caste unemployed, licenced young ladies who have a small motor vehicle licence make the taxpayers the owner of the "irrigation scheme" in collaboration with <b>"Ola" / "Uber" organizations.</b> Karnataka State is an international tourist destination and has a high demand for this project.</p>
                                    <p>Component Cost: The scheme will be subsidized by the corporation for up to <b>50% / maximium of Rs.5.00 lakhs for the project.</b> The remainig <b>50%</b> will be implemented by the bank / financial institution / beneficiary subsidy.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-space"></div>
                                <div className="content-middle">
                                    <h3 className="title">Why Airavat ?</h3>
                                    <div className="sec-space"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Iconbox image={keyIcon} content={keyIconContent} />
                                <Iconbox image={locationIcon} content={locationIconContent} />
                            </div>
                            <div className="col-md-6">
                                <Iconbox image={percentIcon} content={percentIconContent} />
                                <Iconbox image={babyIcon} content={babyIconContent} />
                            </div>
                        </div>
                        
                    </div>
                    <div className="full-width">
                        <div className="sec-space-big"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="sec-space-big"></div>
                                            <div className="common-content">
                                                <h2 className="title">Common Eligibility</h2>
                                                <ul>
                                                    <li>Applicants must belong to the Scheduled Castes.</li>
                                                    <li>The resident of Karnataka State.</li>
                                                    <li>Applicants must be 21 years to 50 years of age.</li>
                                                    <li>Must have a light vehicle licence.</li>
                                                    <li>The annual income of the applicant's family should be within Rs. 50,000 /-.</li>
                                                    <li>If any member of the applicant / family is previously entitled to Rs. 1,00,000 /- from the Corporation / Government, such beneficiaries are no eligible for this facility.</li>
                                                </ul>
                                            </div>
                                        <div className="sec-space-big"></div>
                                    </div>
                                </div>
                            </div>
                        <div className="sec-space-big"></div>    
                    </div>
                    <div className="condition-area">
                        <div className="sec-space-big"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                <div className="sec-space-big"></div>
                                    <div className="conditions">
                                        <h3 className="title">Conditions</h3>
                                        <ol>
                                            <li>You must be able to tie-up with "Ola" / "Uber" / "Meru" companies to get the facility</li>
                                            <li>Applicants must be selected by the Selection Committee. The selected beneficiary must attend the Knowledge Receipt program to successfully manage the taxi form Ola / Uber</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="conditions-img">
                                        <img src={olaCar} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sec-space"></div>
                    <div className="sec-space-big"></div>
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

export default SchemesPage;