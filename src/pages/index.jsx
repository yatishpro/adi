import React from "react"


import Auxs from "../hoc/Auxs/auxs"
import SEO from "../components/Seo/seo"
import PageTitle from "../components/Page-Title/pageTitle"
import vidhansoudha from '../images/vidhanasouda.png'
import videoImg from '../images/video.jpg'
import { LanguageConsumer } from '../Context/context'
import { Carousel } from 'react-bootstrap'

import sliderOne from '../images/slider/home.png'

const IndexPage = () => {



  function EnglishTemplate(){
    return(
      <Auxs>

        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <div className="main-slider">

        <Carousel>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Your Welfare Builds a <br/> Strong Society</h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Your Welfare Builds a <br/> Strong Society</h1>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Your Welfare Builds a <br/> Strong Society</h1>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

        </div>
        
        

        <main id="about"  className="home-page">

        <PageTitle>About Adijambava</PageTitle>
        
          <div className="container">
            <div className="row">

              <div className="col-md-12">
                <div className="about-adijambava">
                  <div className="sec-space-small"></div>
                  <p>
                  Dr. B R Ambedkar Development Corporation executing the project / program anustanagolisalu "adijambava Development Corporation of Karnataka" was passed to establish the order. The corporation's registration and other initiatives have been completed and the Hon'ble Chief Ministers will be launching a new corporation on 17-01-2019.
                  </p>
                  <p>
                  The Karnataka Adi Jambava Development Corporation will exclusively implement Government / Schedule Schemes / programs for comprehensive development of the Scheduled Castes and Scheduled Tribes in the Scheduled Castes.
                  </p>
                  <p>
                  The action plan for 2018-19 was sanctioned by the Ministry of Social Welfare, which has been allocated Rs 296.50 crore. The constituency targeted is based on population based on grants.The corporation hopes that the relatives of the Adiampa community must consolidate the new corporation projects and become economically and socially competitive.
                  </p>
                </div>
                <div className="col-md-12">
                  <div className="vidhansouha">
                    <img src={vidhansoudha} alt=""/>
                    <div className="sec-space"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="homeVideo">
                    <img src={videoImg} alt=""/>
                  </div>
                  <div className="sec-space"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      
      </Auxs>
    )
  }

  function KannadaTemplate(){
    return(
      <Auxs>

        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <div className="main-slider">

        <Carousel>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>ನಿಮ್ಮ ಕಲ್ಯಾಣವು ಪ್ರಬಲ <br/> ಸಮಾಜವನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ</h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>ನಿಮ್ಮ ಕಲ್ಯಾಣವು ಪ್ರಬಲ <br/> ಸಮಾಜವನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ</h1>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>ನಿಮ್ಮ ಕಲ್ಯಾಣವು ಪ್ರಬಲ <br/> ಸಮಾಜವನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ</h1>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

        </div>
        
       

        <main id="about" className="home-page">

        <PageTitle>ಅದಿಜಂಬವ ಬಗ್ಗೆ</PageTitle>

          <div className="container">
            <div className="row">

              <div className="col-md-12">
                <div className="about-adijambava">
                  <div className="sec-space-small"></div>
                  <p>
                  ರಾಜ್ಯ ಸರ್ಕಾರ ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ ವತಿಯಿಂದ ಪರಿಶಿಷ್ಟ ಜಾತಿ/ಪರಿಶಿಷ್ಟ ಪಂಗಡ ಸಮುದಾಯದ ಯುವಕ/ಯುವತಿಯರ ಸಾಮಾಜಿಕ ಹಾಗೂ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿಯ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯೊಂದಿಗೆ ದೇಶದಲ್ಲಿಯೇ ಬೃಹತ್ ಉದ್ಯಮಶೀಲತೆ ಸಾಧಿಸುವ ಸಮೃದ್ಧಿ ಯೋಜನೆಯನ್ನು ಜಾರಿಗೆ ತಂದಿದೆ. ಪ್ರತಿಷ್ಠಿತ ಬ್ರಾಂಡೆಡ್ ಕಂಪೆನಿಗಳು ಹಾಗೂ ಕಾರ್ಪೋರೆಟ್ ಉದ್ದಿಮೆಗಳ ಸಹಭಾಗಿತ್ವದಲ್ಲಿ ಕೈಗಾರಿಕಾ ತರಬೇತಿ, ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನ, ಸಂವಹನ ತರಬೇತಿ. ಚಿಲ್ಲರೆ ಮಳಿಗೆಗಳ ನಿರ್ವಹಣೆ, ತೆರಿಗೆ ನೀತಿ ಮತ್ತು ಜಿ.ಎಸ್.ಟಿ, ದಾಸ್ತಾನು ನಿರ್ವಹಣೆಗಳ ಬಗ್ಗೆ ತರಬೇತಿ ನೀಡಲಿದೆ. ಸರ್ಕಾರವು ಮುಂದಿನ 3 ವರ್ಷದಲ್ಲಿ 2000 ಕೋಟಿ ರೂ ವೆಚ್ಚದಲ್ಲಿ ಗ್ರಾಮೀಣ ಪ್ರದೇಶ, ಎರಡನೇ ಹಾಗೂ ಮೂರನೇ ಶ್ರೇಣಿಯ ನಗರಗಳಲ್ಲಿ 25000 ಸ್ವಯಂ ಉದ್ಯೋಗ ಸೃಷ್ಟಿಸುವ ಗುರಿ ಹೊಂದಿದೆ.
                  </p>
                </div>
                <div className="col-md-12">
                  <div className="vidhansouha">
                    <img src={vidhansoudha} alt=""/>
                    <div className="sec-space"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="homeVideo">
                    <img src={videoImg} alt=""/>
                  </div>
                  <div className="sec-space"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      
      </Auxs>
    )
  }

  function Template(){
    return(
        <LanguageConsumer>
          {(context) => (
          (context.language === 'kannada') ? <KannadaTemplate/> : <EnglishTemplate/>
          )}
      </LanguageConsumer>
    )
  }
  


  return (
      
       <Template/>

  );
}


export default IndexPage
