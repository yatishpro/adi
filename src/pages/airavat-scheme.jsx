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
                                    <h3 className="title">ಐರಾವತ</h3>
                                    <p className="kannada"><b>(ವಾಹನ ಚಾಲನಾ ಪರವಾನಗಿ ಹೊಂದಿರುವ ಪರಿಶಿಷ್ಟ ಜಾತಿ ನಿರುದ್ಯೋಗಿಗಳಿಗೆ ವಾಹನ 
ಸೌಲಭ್ಯ ಯೋಜನೆ)</b></p>
                                    <p className="kannada">ಲಘು ವಾಹನ ಚಾಲನಾ ಪರವಾನಿಗಿ ಹೊಂದಿರುವ ಪರಿಶಿಷ್ಟ ಜಾತಿಯ ನಿರುದ್ಯೋಗಿ ವಿಧ್ಯಾವಂತ ಯುವಕ/ ಯುವತಿಯರಿಗೆ ಪ್ರವಾಸಿ ಟ್ಯಾಕ್ಸಿಗಳ ಮಾಲೀಕರನ್ನಾಗಿ ಮಾಡಿ “ಓಲಾ”/“ಉಬರ್” ಸಂಸ್ಥೆಗಳ ಸಹಯೋಗದಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಆದಾಯ ಪಡೆಯುವ “ಐರಾವತ ಯೋಜನೆ” ಅನುಷ್ಟಾನಗೊಳಿಸಲು ಉದ್ದೇಶಿಸಿದೆ. ಕರ್ನಾಟಕ ರಾಜ್ಯ ಅಂತರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದ ಪ್ರವಾಸಿಗರ ತಾಣವಾಗಿದ್ದು, ಈ ಯೋಜನೆಗೆ ಹೆಚ್ಚಿನ ಬೇಡಿಕೆ ಇರುತ್ತದೆ.</p>
                                    <p className="kannada">ಘಟಕ ವೆಚ್ಚ : ಈ ಯೋಜನೆಗೆ ಘಟಕ ವೆಚ್ಚದ ಶೇ:50ರಷ್ಟು / ಗರಿಷ್ಟ ರೂ.5.00 ಲಕ್ಷಗಳವರೆಗೆ ನಿಗಮದಿಂದ ಸಹಾಯಧನ ಒದಗಿಸಲಾಗುವುದು. ಉಳಿದ ಶೇ:50ರಷ್ಟು ಭಾಗ ಬ್ಯಾಂಕ್/ಹಣಕಾಸು ಸಂಸ್ಥೆ/ಫಲಾನುಭವಿಯ ವಂತಿಕೆಯಿಂದ ಭರಿಸಿ ಯೋಜನೆಯನ್ನು ಅನುಷ್ಟಾನ ಮಾಡಲಾಗುವುದು.</p>
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
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು ಪರಿಶಿಷ್ಟ ಜಾತಿಗೆ ಸೇರಿದವರಾಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಕರ್ನಾಟಕ ರಾಜ್ಯದ ನಿವಾಸಿಯಾಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು 21 ವರ್ಷದಿಂದ 50 ವರ್ಷದವರೆಗಿನ ವಯೋಮಾನದವರಾಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಲಘು ವಾಹನ ಚಾಲನಾ ಪರವಾನಗಿ ಹೊಂದಿರಬೇಕು.</li>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರ ಕುಟುಂಬದ ವಾರ್ಷಿಕ ವರಮಾನವು ರೂ.50,000/- ಮಿತಿಯೊಳಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು/ ಕುಟುಂಬದ ಅವಲಂಬಿತ ಯಾವುದೇ ಸದಸ್ಯರು ಈ ಹಿಂದೆ ನಿಗಮ/ ಸರ್ಕಾರದಿಂದ ರೂ.1,00,000/- ಮೇಲ್ಪಟ್ಟು ಸೌಲಭ್ಯ ಪಡೆದಿದ್ದಲ್ಲಿ, ಅಂತಹ ಫಲಾನುಭವಿಗಳು ಈ ಸೌಲಭ್ಯ ಪಡೆಯಲು ಅರ್ಹರಿರುವುದಿಲ್ಲ.</li>
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
                                            <li className="kannada">“ಓಲಾ”/ “ಉಬರ್”/ “ಮೇರು” ಸಂಸ್ಥೆಗಳೊಂದಿಗೆ ಟೈ-ಅಪ್ ಮಾಡಿಕೊಂಡು  ಸೌಲಭ್ಯ ಪಡೆಯಲು ಬದ್ದರಿರಬೇಕು.</li>
                                            <li className="kannada">ಅರ್ಜಿದಾರರು ಆಯ್ಕೆ ಸಮಿತಿಯಿಂದ ಆಯ್ಕೆಯಾಗಿರಬೇಕು. ಆಯ್ಕೆಯಾದ ಫಲಾನುಭವಿಯು ಓಲಾ/ ಉಬರ್/ ಮೇರು ಸಂಸ್ಥೆಯಿಂದ ಟ್ಯಾಕ್ಸಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ವಹಿಸುವ ಬಗ್ಗೆ ಜ್ಞಾನವನ್ನು ಪಡೆಯುವ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಹಾಜರಾಗಬೇಕು.</li>
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
                                    <h3 className="title">Airavat Plan</h3>
                                    <p><b>(Vehicle facility scheme	 for Scheduled Caste Unemployed Individuals with  Vehicle Licenses)</b></p>
                                    <p>The Scheduled Caste unemployed, licensed young men and women who have a small motor vehicle licenses will be made  owners of the tourist taxi in collaboration with <b>"Ola" / "Uber"</b> organization, which helps them increase their earning capabilities. Karnataka State is an international tourist destination and has a high demand for this project.</p>
                                    <p>Component Cost: The scheme will be subsidized by the corporation for up to 50% / maximum of Rs.5.00 lakhs for the project. The remaining 50% will be implemented by the bank / financial institution / beneficiary subsidy.</p>
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
                                                    <li>Must be the resident of Karnataka State.</li>
                                                    <li>Applicants must be 21 years to 50 years of age.</li>
                                                    <li>Must have a light vehicle license.</li>
                                                    <li>The annual income of the applicant's family should be within Rs. 50,000 / -.</li>
                                                    <li>If any member of the applicant / family is previously entitled to Rs.1,00,000 / - from the Corporation / Government, such beneficiaries are not eligible for this facility.</li>
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