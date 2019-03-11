import React from 'react'
import Auxs from '../hoc/Auxs/auxs'
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
                <div className="sec-space"></div>
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
                                    <h3 className="title">ಉನ್ನತಿ ಯೋಜನೆ</h3>
                                    <div className="sec-space-sma"></div>
                                    <p className="kannada"><b>(ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನದ ಬಳಕೆ ಮಾಡಿ ಹೊಸ ಚಿಂತನೆ ಮತ್ತು ಅವಿಷ್ಕಾರಗಳ ವಿಶಿಷ್ಟ ನೂತನ ಉದ್ಯಮ ಪ್ರಾರಂಭಿಸಿರುವ ಅರ್ಹ ಪ್ರತಿಭಾವಂತರಿಗೆ ಅನುದಾನ ನೀಡುವ ಯೋಜನೆ)</b></p>
                                    <p className="kannada">ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆಯ ವ್ಯಾಪ್ತಿಗೆ ಬರುವ ಎಲ್ಲಾ ಅಭಿವೃದ್ಧಿ ನಿಗಮಗಳ ಪರವಾಗಿ ಡಾ:ಬಿ.ಆರ್.ಅಂಬೇಡ್ಕರ್ ಅಭಿವೃದ್ಧಿ  ನಿಗಮವು 2018-19 ನೇ ಸಾಲಿನಲ್ಲಿ ಉನ್ನತಿ ಯೋಜನೆಯನ್ನು ಅನುಷ್ಟಾನಗೊಳಿಸುತ್ತಿದೆ. ನಗರ ಮತ್ತು ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಪರಿಶಿಷ್ಟ ಜಾತಿ ಪ್ರತಿಭಾವಂತ ಯುವಕ/ಯುವತಿಯರು ಸ್ಟಾರ್ಟ್ ಅಪ್ ಉದ್ದಿಮೆಗಳನ್ನು ಆರಂಭಿಸಿದ್ದಲ್ಲಿ ಪ್ರಾರಂಭಿಕ ಆರ್ಥಿಕ ಸಮಸ್ಯೆಗಳಿಗೆ ಬೆಂಬೆಲವಾಗಿ ಆಯ್ಕೆಯಾಗುವ ಪ್ರತಿ ಅರ್ಹ ಉದ್ಯಮಿಗೆ ರೂ.50.00 ಲಕ್ಷಗಳವರೆಗೆ ಆರ್ಥಿಕ ಸಹಾಯ ಮಾಡುವುದು ಯೋಜನೆಯ ಉದ್ದೇಶವಾಗಿರುತ್ತದೆ. ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಐಟಿ ಬಿಟಿ ಇಲಾಖೆಯಲ್ಲಿ ಈಗಾಗಲೇ ಈ ಯೋಜನೆಯು ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದು, ಅದೇ ಮಾದರಿಯಲ್ಲಿ ಪರಿಶಿಷ್ಟ ಜಾತಿ ಮತ್ತು ಪರಿಶಿಷ್ಟ ವರ್ಗದ ಪ್ರತಿಭಾವಂತ ಉದ್ಯಮಿಗಳಿಗೆ ಈ ಯೋಜನೆಯನ್ನು ವಿಸ್ತರಿಸಲಾಗುವುದು.ಆನ್‍ಲೈನ್ ಮೂಲಕ ಅರ್ಜಿಗಳನ್ನು ಆಹ್ವಾನಿಸಿ ಉನ್ನತ ಮಟ್ಟದ ಮೌಲ್ಯಮಾಪನ ಸಮಿತಿ ಮತ್ತು ಅಂತಿಮ ಆಯ್ಕೆ ಸಮಿತಿ ಮೂಲಕ ಫಲಾನುಭವಿ ಉದ್ಯಮಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಸೌಲಭ್ಯ ಒದಗಿಸಲಾಗುವುದು.</p>
                                    <li className="kannada">ಅರ್ಜಿದಾರರು Sಣಚಿಡಿಣuಠಿ  ಪಾಲಿಸಿಯ ನಿಯಮಾವಳಿಗಳಂತೆ ಅರ್ಹರಿರಬೇಕು.</li>
                                    <li className="kannada">ಅರ್ಜಿದಾರರು Iಆಇಂ2Poಅ ಯೋಜನೆಯ ಅರ್ಹತಾ ಮಾನದಂಡಗಳಂತೆ ಅರ್ಹರಾದ ತಕ್ಷಣ ಅನುದಾನಕ್ಕೆ ಅರ್ಹರು ಎಂದು ಪರಿಗಣಿಸತಕ್ಕದ್ದಲ್ಲ.</li>
                                    <li className="kannada">ಇದೇ ಉದ್ಯಮದ ಉದ್ದೇಶಕ್ಕಾಗಿ ಬೇರೆ ಸಂಸ್ಥೆ/ ಇಲಾಖೆಗಳಿಂದ ಆರ್ಥಿಕ ಬೆಂಬಲ ಪಡೆದುಕೊಂಡಿದ್ದಲ್ಲಿ, ಈ ಯೋಜನೆಯಡಿ ಅನುದಾನಕ್ಕೆ ಅರ್ಹರಾಗಿರುವುದಿಲ್ಲ.</li>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-space"></div>
                                <div className="content-middle">
                                    <h3 className="title">ಏಕೆ ಉನ್ನತಿ ಯೋಜನೆ ?</h3>
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
                                                <div className="sec-space-small"></div>
                                                <ul>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು ಪರಿಶಿಷ್ಟ ಜಾತಿಗೆ ಸೇರಿದವರಾಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಕರ್ನಾಟಕ ರಾಜ್ಯದ ನಿವಾಸಿಯಾಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು 21 ವರ್ಷದಿಂದ 50 ವರ್ಷದವರೆಗಿನ ವಯೋಮಾನದವರಾಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರ ಕುಟುಂಬದ ವಾರ್ಷಿಕ ವರಮಾನವು ರೂ.5,00,000/- ಮಿತಿಯೊಳಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ತಾಂತ್ರಿಕ/ವೃತ್ತಿ ಆಧಾರಿತ ಪದವಿ ಅಥವಾ ಸ್ನಾತಕೋತ್ತರ ಪದವಿ ಪಡೆದಿರಬೇಕು.</li>
                                                    <li className="kannada">ಡಾ.ಬಿ.ಆರ್.ಅಂಬೇಡ್ಕರ್ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಯಡಿ  ಸೌಲಭ್ಯ ಪಡೆಯಲು “ಕರ್ನಾಟಕ ಸ್ಟಾರ್ಟ್-ಅಪ್ ಸೆಲ್”ನಲ್ಲಿ ನೋಂದಾಣಿ ಮಾಡಲು ಅರ್ಹರಿರಬೇಕು.</li>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು ತಮ್ಮ ಪದವಿ ಮತ್ತು ವಿಶೇಷ ಪ್ರತಿಭೆಯಿಂದ ಯಶಸ್ವಿ ತಾಂತ್ರಿಕ ಉದ್ದಿಮೆಯನ್ನು ಆರಂಭಿಸಿರುವ /ಆರಂಭಿಸುವ ಬಗ್ಗೆ ವಿಶೇಷ ಪಿ.ಪಿ.ಟಿಯನ್ನು ಪ್ರದರ್ಶಿಸಬೇಕು.</li>
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
                                        <h3 className="title">ನಷರತ್ತುಗಳು</h3>
                                        <ol>
                                            <li className="kannada">ಅರ್ಜಿದಾರರು ಆನ್‍ಲೈನ್‍ನಲ್ಲಿ ನಿಗದಿತ ದಿನಾಂಕದೊಳಗೆ ನೊಂದಾಣಿ ಮಾಡಿಕೊಳ್ಳಬೇಕು.</li>
                                            <li className="kannada">ಅರ್ಜಿದಾರರು ತಾಂತ್ರಿಕ ಕ್ಷೇತ್ರದಲ್ಲಿ ಹೊಸ ಉದ್ದಿಮೆಯನ್ನು ಆರಂಭಿಸಿರುವ /ಆರಂಭಿಸುವ ಬಗ್ಗೆ ಯೋಜನಾ ವಿವರಗಳನ್ನು ಆನ್ ಲೈನ್ ಅರ್ಜಿಯಲ್ಲಿ ವಿವರಿಸಬೇಕು.</li>
                                            <li className="kannada">ಒಬ್ಬರು ಒಂದು ಅನ್‍ಲೈನ್ ಅರ್ಜಿ ಮಾತ್ರ ಸಲ್ಲಿಸಬೇಕು. ಹೆಚ್ಚು ಅರ್ಜಿ ಸಲ್ಲಿಸಿದಲ್ಲಿ ಮೊದಲನೇ ಅರ್ಜಿಯನ್ನು ಮಾತ್ರ ಪರಿಗಣಿಸಲಾಗುವುದು. ಮತ್ತು ಅರ್ಜಿದಾರನ ಹೆಚ್ಚುವರಿ ಅರ್ಜಿಗಳನ್ನು ತಿರಸ್ಕರಿಸಲಾಗುವುದು.</li>
                                            <li className="kannada">ಅರ್ಜಿದಾರರು ಹೊಸ ಉದ್ಯಮವನ್ನು ಪೂರ್ಣ ಪ್ರಮಾಣದಲ್ಲಿ ನಿರ್ವಹಿಸಲು ಬದ್ದರಾಗಿರಬೇಕು. ಬೇರೆ ಉದ್ಯಮ ಅಥವಾ ಬೇರೆ ಉದ್ಯೋಗದ ಆದಾಯ ಅಥವಾ ಫೆಲೋಶೀಪ್ ಪಡೆಯುವಂತಿಲ್ಲ.</li>
                                            <li className="kannada">ಅರ್ಜಿದಾರರು ಹೊಸ ಉದ್ಯಮ (ಸ್ಟಾರ್ಟ್-ಅಪ್) ಆರಂಭಿಸಿದ ನಂತರ ಹೂಡಿಕೆಗೆ ಅವಶ್ಯವಿರುವ ಹಣಕಾಸು ವ್ಯವಸ್ಥೆಯನ್ನು ಬೇರೆ ನಿರೀಕ್ಷಿತ ಮೂಲಗಳಿಂದ ಪಡೆದುಕೊಂಡ ನಂತರ ನಿಗಮದ ಅನುದಾನದ ಬೆಂಬಲವನ್ನು (ಪ್ರೋತ್ಸಾಹ ಧನ) ಸ್ಥಗಿತಗೊಳಿಸಲಾಗುವುದು.</li>
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
                <div className="sec-space"></div>
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
                                    <h3 className="title">Unnati Scheme</h3>
                                    <div className="sec-space-small"></div>
                                    <p>Dr. BR Ambedkar Development Corporation has been implementing the scheme for 2018-19 on all development corporations that come under the purview of the Social Welfare Department. The objective of the scheme is to provide financial support of up to Rs 50.00 lakh per qualified entrepreneur who will be selected as a support for early financial problems if Scheduled Caste talented young men and women start up enterprises in urban and rural areas. The project already exists in the ITBT department of Karnataka Government and the scheme will be expanded to entrepreneurs of the Scheduled Castes and Scheduled Tribes in the same manner, The applications will be accepted online and beneficiary entrepreneurs will be selected by a high level evaluation committee and final selection committee.</p>
                                    <li>Applicants must be eligible for compliance with the terms of the Start-up policy.</li>
                                    <li>Applicants are not considered eligible for grant as soon as they are eligible as idea2PoA Qualifying criteria.</li>
                                    <li>The applicant will not qualify for the grants if he/she is receiving financial support for the same purpose from other organization/Department.</li>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-space"></div>
                                <div className="content-middle">
                                    <h3 className="title">Why Unnati ?</h3>
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
                                                    <li>Must be the resident of Karnataka State.</li>
                                                    <li>Applicants must be 21 years to 50 years of age.</li>
                                                    <li> The annual income of the applicant's family shall be within Rs.5,00,000 / -.</li>
                                                    <li>Applicant Must be a holder of Technical /Professional Degree /  Master's degree.</li>
                                                    <li>To avail the facility under Dr. BR Ambedkar development scheme the applicant must be eligible to  register in the "Karnataka Start-up Cell"</li>
                                                    <li>The applicant should exhibit a special PPT about  launching a successful technical venture with his degree and special talent.</li>
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
                                            <li>Applicants must register online at the prescribed date.</li>
                                            <li>Applicant should explain the details of the project in the online application for starting / launching a new business in the field of technology.</li>
                                            <li>One must submit an Only one online application . if more applications re submitted onlyhe first application will be considered and additional applications of the applicant will be rejected.</li>
                                            <li>Applicants must be committed to maintaining the new business in full size. No other business or other job income or fellowship can be obtained.</li>
                                            <li>The support of the corporation's support (incentive) will be discontinued after the applicant has begun a new enterprise to acquire the necessary financial system for investments from other prospective sources.</li>
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