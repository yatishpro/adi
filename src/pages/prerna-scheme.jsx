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
                                    <h3 className="title">ಪ್ರೇರಣಾ ಯೋಜನೆ</h3>
                                    <div className="sec-space-small"></div>
                                    <p className="kannada">1)ಬ್ಯೂಟಿ ಮತ್ತು ವೆಲ್‍ನೆಸ್ ಕೇಂದ್ರಗಳು:</p>
                                    <p className="kannada">ಕರ್ನಾಟಕ ಆದಿಜಾಂಬವ ಅಭಿವೃದ್ಧಿ ನಿಗಮದಿಂದ ಮಹಿಳೆಯರ ಆರ್ಥಿಕ ಸ್ವಾವಲಂಬನೆ ಮತ್ತು ಸಬಲೀಕರಣ ಉದ್ದೇಶಕ್ಕಾಗಿ ಸಮೃದ್ಧಿ ಯೋಜನೆ ಭಾಗವಾಗಿ “ಪ್ರೇರಣಾ ಯೋಜನೆ” ಯನ್ನು ಅನುಷ್ಟಾನಗೊಳಿಸಲು ಉದ್ದೇಶಿಸಿದೆ. ನಗರ ಮತ್ತು ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಪರಿಶಿಷ್ಟ ಜಾತಿ ನಿರುದ್ಯೋಗಿ ಯುವತಿಯರಿಗೆ ಸ್ವಯಂ ಉದ್ಯೋಗ ಘಟಕಗಳನ್ನು ಆರಂಭಿಸಲು ನಿಗಮದಿಂದ ಸಹಾಯಧನ ಪಡೆಯಲು ಅವಕಾಶ ಮಾಡಿಕೊಡಲಾಗುತ್ತದೆ.</p>
                                    <p className="kannada">ರಾಷ್ಟ್ರ/ ರಾಜ್ಯ ಮಟ್ಟದ ಬ್ರಾಡೆಂಡ್ ತರಬೇತಿ ಸಂಸ್ಥೆಗಳ ಸಹಯೋಗದಲ್ಲಿ “ಬ್ಯೂಟಿ ಮತ್ತು ವೆಲ್‍ನೆಸ್ ಕೇಂದ್ರಗಳನ್ನು ಸ್ಥಾಪಿಸಿ ಪರಿಶಿಷ್ಟ ಜಾತಿ ಯುವತಿಯರಿಗೆ ಡಾ.ಬಿ.ಆರ್.ಅಂಬೇಡ್ಕರ್‍ಅಭಿವೃದ್ಧಿ ನಿಗಮದಿಂದ ತರಬೇತಿ ಹಾಗೂ ಉದ್ಯೋಗ ಯೋಜನೆಯನ್ನು ಅನುಷ್ಟಾನಗೊಳಿಸಲು ಉದ್ದೇಶಿಸಿದೆ. ನಿಗಮಗಳ ನೂತನ ಯೋಜನೆ ಸಮೃದ್ಧಿ ಯೋಜನೆಯ ಮಾದರಿಯಲ್ಲಿ ಈ ಯೋಜನೆಯನ್ನು </p>
                                    <p className="kannada">ಅನುಷ್ಟಾನಗೊಳಿಸಲಾಗುವುದು.ಆಯ್ಕೆಯಾದ ಫಲಾನುಭವಿಯು ಬ್ರಾಂಡೆಡ್ ಸಂಸ್ಥೆಗಳ ತರಬೇತಿ ಪಡೆದು ಅರ್ಹರಾಗಬೇಕು. ಬ್ಯೂಟಿ ಮತ್ತು ವೆಲ್‍ನೆಸ್ ಕೇಂದ್ರ ಆರಂಭಿಸಲು ಆಯ್ಕೆಯಾದ ಪ್ರತಿ ಫಲಾನುಭವಿಗೆ ಗರಿಷ್ಟ ರೂ.10.00 ಲಕ್ಷಗಳವರೆಗೆ ಆರ್ಥಿಕ ಬೆಂಬಲವನ್ನು ನೀಡಲಾಗುವುದು. ಪ್ರಾಂಚೈಸಿ /ಡೀಲರ್‍ಶಿಪ್ ಪಡೆಯಲು ಹಾಗೂ ಘಟಕವನ್ನು ನಿರ್ವಹಿಸಲು ತಾಂತ್ರಿಕ ಬೆಂಬಲವನ್ನು ನೀಡಲಾಗುವುದು.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-space"></div>
                                <div className="content-middle">
                                    <h3 className="title">ಏಕೆ ಪ್ರೇರಣಾ ಯೋಜನೆ ?</h3>
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
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು ಪರಿಶಿಷ್ಟ ಜಾತಿಗೆ ಮಹಿಳೆಯಾಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಕರ್ನಾಟಕ ರಾಜ್ಯದ ನಿವಾಸಿಯಾಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರು 21 ವರ್ಷದಿಂದ 50 ವರ್ಷದವರೆಗಿನ ವಯೋಮಾನದವರಾಗಿರಬೇಕು.</li>
                                                    <li className="kannada">ಅರ್ಜಿದಾರರ ಕುಟುಂಬದ ವಾರ್ಷಿಕ ವರಮಾನವು ರೂ.1,50,000/- ಮಿತಿಯೊಳಗಿರಬೇಕು.</li>
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
                                            <li className="kannada">ಅರ್ಜಿದಾರರು ಆಯ್ಕೆ ಸಮಿತಿ ಹಾಗೂ ಬ್ರಾಂಡೆಡ್ ಸಂಸ್ಥೆಯ ಕನಿಷ್ಟ ಅರ್ಹತಾ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಆಯ್ಕೆಯಾಗಿರಬೇಕು.</li>
                                            <li className="kannada">ಆಯ್ಕೆಯಾದ ಫಲಾನುಭವಿಯು ಕಡ್ಡಾಯವಾಗಿ ಬ್ರಾಂಡೆಡ್ ಸಂಸ್ಥೆಯಿಂದ ಘಟಕದ ನಿರ್ವಹಣೆಯ ಬಗ್ಗೆ ಅಗತ್ಯ ಜ್ಞಾನವನ್ನು ಪಡೆಯುವ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಹಾಜರಾಗಲು ಲಿಖಿತ ಒಪ್ಪಿಗೆ ನೀಡಬೇಕು.</li>
                                            <li className="kannada">ಮಂಜೂರಾತಿ ಪಡೆದ ಫಲಾನುಭವಿಯು ಅನರ್ಹರೆಂದು ಕಂಡು ಬಂದಲ್ಲಿ ಮಂಜೂರಾತಿಯನ್ನು ಯಾವುದೇ ಹಂತದಲ್ಲಿ ರದ್ದು ಪಡಿಸಲಾಗುತ್ತದೆ.</li>
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
                                    <h3 className="title">Prerna Scheme</h3>
                                    <div className="sec-space-small"></div>
                                    <p>1) Beauty and Wellness Centers:</p>
                                    <p>The Karnataka Adi Jambava Development Corporation intends to implement "Motivation Plan" as part of the Samskrithi scheme for women's financial self-reliance and empowerment. Scheduled Caste unemployed women in urban and rural areas are allowed to get subsidy from the corporation to start self employment units.</p>
                                   <p>In collaboration with State / State level branded Training Institutes, "Establishment of Beauty and Wellness Centers is aimed at implementing training and employment plan for Scheduled Caste women with Dr. BR Ambedkar Development Corporation. The scheme will be implemented in the form of corporations' new proposal plan. The selected beneficiary should qualify for the training of branded institutions. Every beneficiary selected to start the Beauty and Wellness Center will be given financial support of up to Rs.10.00 lakhs. Technical support will be given to acquire franchise / dealer and maintain the unit.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-space"></div>
                                <div className="content-middle">
                                    <h3 className="title">Why Prerna Scheme ?</h3>
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
                                                    <li>Applicants should be a Scheduled Caste woman.</li>
                                                    <li>The resident of Karnataka State.</li>
                                                    <li>Applicants must be 21 years to 50 years of age.</li>
                                                    <li>The annual income of the applicant's family shall be within Rs.1,50,000 / -.</li>
                                                    <li> If any member of the applicant / family is previously entitled to Rs.1,00,000 / - from the Corporation / Government, such beneficiaries are not eligible for this facility.</li>
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
                                            <li>Applicants should be selected in the selection committee and the minimum qualifying examination of the branded organization.</li>
                                            <li>The selected beneficiary must comply with the written consent to attend a program that will be required to obtain necessary knowledge about the management of the entity from the branded organization.</li>
                                            <li>Approval will be canceled at any stage if the approved beneficiary is found to be ineligible.</li>
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