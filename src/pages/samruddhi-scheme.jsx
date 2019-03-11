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
                                    <h3 className="title">ಸಮೃದ್ಧಿ ಯೋಜನೆ</h3>
                                    <div className="sec-space-sma"></div>
                                    <p className="kannada"><b>(ಸಾಮಾಜಿಕ ಉದ್ಯಮ ಶೀಲತಾ ಯೋಜನೆಯಡಿಯಲ್ಲಿ ವಿವಿಧ ಆರ್ಥಿಕ  ಚಟುವಟಿಕೆಗಳಿಗೆ ಸಹಾಯಧನ ಒದಗಿಸುವುದು)</b></p>
                                    <li className="kannada">ಪರಿಶಿಷ್ಟ ಜಾತಿಯ ನಿರುದ್ಯೋಗಿ ಆದಿಜಾಂಬವ ಸಮುದಾಯಕ್ಕೆ ಯುವಕ / ಯುವತಿಯರಲ್ಲಿ ಉದ್ಯಮ ಶೀಲತೆಯನ್ನು ಅಭಿವೃದ್ಧಿಗೊಳಿಸಿ ಸ್ವಯಂ ಉದ್ಯೋಗಕ್ಕೆ ಪ್ರೋತ್ಸಾಹ ನೀಡಲು ಪ್ರತಿಷ್ಟಿತ ಬ್ರಾಂಡೆಡ್ ಉತ್ಪನ್ನಗಳ ಮಾರಾಟಕ್ಕೆ ಪ್ರಾಂಚೈಸ್ ನೀಡುವುದು.</li>
                                    <li className="kannada">ಈ ನಿಟ್ಟಿನಲ್ಲಿ ಪರಿಶಿಷ್ಟ ಜಾತಿ ಆದಿಜಾಂಬವ ಸಮುದಾಯಕ್ಕೆ ಸೇರಿದ ಕನಿಷ್ಟ ಪಕ್ಷ ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ ವಿದ್ಯಾರ್ಹತೆ ಹೊಂದಿರುವ ಯುವಕ/ ಯುವತಿಯರು  ಟೈರ್-2 ಮತ್ತು ಟೈರ್-3 ನಗರಗಳಲ್ಲಿ ಬ್ರಾಂಡೆಡ್ ಉತ್ಪನ್ನಗಳನ್ನು ಪ್ರಾಂಚೈಸಿ ಮಳಿಗೆಗಳ ಮೂಲಕ ಮಾರಾಟ ಮಾಡಲು ಮುಂದೆ ಬಂದಲ್ಲಿ ಪ್ರಾಂಚೈಸರ್ಸ್ ಮೂಲಕ ಸಂಬಂಧ ಪಟ್ಟ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಕೌಶಲ್ಯ ಮತ್ತು ಸಾಫ್ಟ್‍ಸ್ಕಿಲ್ಸ್‍ನಲ್ಲಿ ತರಬೇತಿ ನೀಡಿ ಉದ್ಯಮಪತಿಗಳಾಗಲು ಅನುವಾಗುವಂತೆ ನಿಗಮದಿಂದ ಗರಿಷ್ಟ ರೂ. 10.00 ಲಕ್ಷಗಳ ಧನಸಹಾಯವನ್ನು ಒದಗಿಸಲಾಗುವುದು.</li>
                                    <li className="kannada">ಉದ್ದಿಮೆಗೆ ಅವಶ್ಯವಿರುವ ಹೆಚ್ಚಿನ ಮೊತ್ತವನ್ನು ಫಲಾನುಭವಿಗಳು ಸ್ವಂತ ಮೂಲದಿಂದಾಗಲಿ ಅಥವಾ ಬ್ಯಾಂಕ್ ಮೂಲಕ ವ್ಯವಸ್ಥೆ ಮಾಡಿಕೊಳ್ಳಬೇಕಾಗಿರುತ್ತದೆ.</li>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-space"></div>
                                <div className="content-middle">
                                    <h3 className="title">ಸಮೃದ್ಧಿ ಯೋಜನೆ ?</h3>
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
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು/ ಕುಟುಂಬದ ಅವಲಂಬಿತ ಯಾವುದೇ ಸದಸ್ಯರು ಈ ಹಿಂದೆ ನಿಗಮ/ ಸರ್ಕಾರದಿಂದ ರೂ.1,00,000/- ಮೇಲ್ಪಟ್ಟು ಸೌಲಭ್ಯ ಪಡೆದಿದ್ದಲ್ಲಿ, ಅಂತಹ ಫಲಾನುಭವಿಗಳು ಈ ಸೌಲಭ್ಯ ಪಡೆಯಲು ಅರ್ಹರಿರುವುದಿಲ್ಲ.</li>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು ಘಟಕವನ್ನು ಸ್ಥಾಪಿಸಲು ಅವಶ್ಯವಿರುವ ಸ್ಥಳಾವಕಾಶವನ್ನು ಹೊಂದಿರಬೇಕು.</li>
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
                                            <li className="kannada">ಅರ್ಜಿದಾರರು ಆಯ್ಕೆ ಸಮಿತಿಯಿಂದ ಆಯ್ಕೆಯಾಗಿರಬೇಕು.</li>
                                            <li className="kannada">ಆಯ್ಕೆಯಾದ ಫಲಾನುಭವಿಯು ಬ್ರಾಂಡೆಡ್ ಸಂಸ್ಥೆಗಳು ನೀಡುವ ತರಬೇತಿಯನ್ನು ಕಡ್ಡಾಯವಾಗಿ ಪಡೆದು ಅರ್ಹರಾಗಬೇಕು.</li>
                                            <li className="kannada">ಮಂಜೂರಾತಿ ಪಡೆದ ಫಲಾನುಭವಿಯು ಅರ್ನಹರೆಂದು ಕಂಡು ಬಂದಲ್ಲಿ ಮಂಜೂರಾತಿಯನ್ನು ಯಾವುದೇ ಹಂತದಲ್ಲಿ ರದ್ದುಪಡಿಸಲಾಗುತ್ತದೆ.</li>
                                            <li className="kannada">ಘಟಕವನ್ನು ಆರಂಭಿಸಲು ಅವಶ್ಯವಿರುವ ಸ್ಥಳವನ್ನು ಹೊಂದಿರಬೇಕು.</li>
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
                                    <h3 className="title">Samruddhi Scheme</h3>
                                    <p>(Subsidy for various financial activities under the Social Business Improvement Program)</p>
                                    <div className="sec-space-small"></div>
                                    <li>To encourage self employment among adolescent community the branded product franchaisie fascitlity will be provided for young entrepreneurs .</li>
                                    <li>In this regard, if the individual who has completed the minimum qualification SSLC from Scheduled Caste Adijambava community come forward to sell branded products in Tire-2 and Tire-3 cities through the franchisie stores will be  trained by the franchisers to acquire entrepreneurship and soft skills for which a Maximum of  Rs. 10.00 lakhs will be provided for funding.</li>
                                    <li>The additional amount required for the enterprise is to be arranged from  their own sources or by the bank.</li>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-space"></div>
                                <div className="content-middle">
                                    <h3 className="title">Why Samruddhi ?</h3>
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
                                                    <li>The annual income of the applicant's family shall be Rs.5,00,000 / -.</li>
                                                    <li>If any member of the applicant / family is previously entitled to Rs.1,00,000 / - from the Corporation / Government, such beneficiaries are not eligible for this facility.</li>
                                                    <li>Applicants must have the space required to set up the unit.</li>
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
                                            <li>Applicants must be selected by the Selection Committee.</li>
                                            <li>The selected beneficiary must qualify for the training offered by branded institutions.</li>
                                            <li> The sanctioned beneficiary will be canceled at any stage if he is found to be eligible.</li>
                                            <li>Must have a place to start the unit.</li>
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