import React from "react"


import Auxs from "../hoc/Auxs/auxs"
import SEO from "../components/Seo/seo"
import PageTitle from "../components/Page-Title/pageTitle"
import vidhansoudha from '../images/vidhanasouda.png'
import videoImg from '../images/video.jpg'
import { LanguageConsumer } from '../Context/context'
import { Carousel } from 'react-bootstrap'

import sliderOne from '../images/final.png'

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
                  <p>The Government has come up with various project benefits with the aim of providing social justice equally to the various castes in the prestigious caste list, and for this purpose the banjaara taanda development corporation was already established. In the same manner for the purpose of development of the bhoovi and vaddar community the “ Karnataka Bhoovi Development corporation” was established. And now in the interest of “Dr B R Ambedkar development corporation” an order has been issued that the “Karnataka Adijambava Development Corporation” is to be established for the enforcement of all projects and programmes for those in prestigious castes/schedule castes and other related castes. After the completion of the corporation's registration and other initiatives the Honourable Chief Minister will launch a new corporation on 17/01/2019.</p>
                  <p>For the purpose of comprehensive development of the scheduled castes and other related castes the “Karnataka Adijambava Development Corporation” will take up the implementation of those projects/programmes assigned by the government.</p>
                  <p>The action plan created by the social welfare department states that for the year 2018-2019 Rs 296.50 Crs grants are sanctioned from the department. The targeted area of ​​the assembly constituency is based on population based on grants.</p>
                  <p>The corporation hopes that the relatives of the Adijambava community will be able to use the new corporation projects to become economically and socially viable.</p>
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
                   <p className="kannada">ನಿಗಮದ ಕಾರ್ಯ ಚಟುವಟಿಕೆಗಳ ಸ್ಥೂಲ ಪರಿಚಯ
ಸರ್ಕಾರದ ವಿವಿಧ ಯೋಜನೆಗಳ ಪ್ರಯೋಜನಗಳನ್ನು ಪರಿಶಿಷ್ಟ ಜಾತಿ ಪಟ್ಟಿಯಲ್ಲಿರುವ ವಿವಿಧ ಜಾತಿಗಳಿಗೆ ಸವiನಾಗಿ ದೊರಕಿಸಿಕೊಟ್ಟು ಸಾಮಾಜಿಕ ನ್ಯಾಯವನ್ನು ಒದಗಿಸುವ ಉದ್ದೇಶದಿಂದ ಈಗಾಗಲೇ ಬಂಜಾರ ಸಮುದಾಯಗಳಿಗೆ ತಾಂಡಾ ಅಭಿವೃದ್ಧಿ ನಿಗಮವನ್ನು ಸ್ಥಾಪಿಸಲಾಗಿದೆ.ಅದೇ ರೀತಿ ಭೋವಿ / ವಡ್ಡರ್ ಸಮುದಾಯಗಳ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಕರ್ನಾಟಕ ಭೋವಿ ಅಭಿವೃದ್ಧಿ ನಿಗಮವನ್ನು ಸ್ಥಾಪಿಸಿದೆ.ಆದುದರಿಂದ ಪರಿಶಿಷ್ಟ ಜಾತಿಯಲ್ಲಿರುವ ಮಾದಿಗ ಮತ್ತು ಅದರ ಸಂಬಂಧಿಸಿದ ಜಾತಿಗಳಿಗೆ ಡಾ.ಬಿ.ಆರ್.ಅಂಬೇಡ್ಕರ್ ಅಭಿವೃದ್ಧಿ ನಿಗಮದಲ್ಲಿ ಜಾರಿಗೊಳಿಸುತ್ತಿರುವ ಎಲ್ಲಾ ಯೋಜನೆ/ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಅನುಷ್ಟಾನಗೊಳಿಸಲು “ಕರ್ನಾಟಕ ಆದಿಜಾಂಬವ ಅಭಿವೃದ್ಧಿ ನಿಗಮ” ವನ್ನು ಸ್ಥಾಪಿಸಲು ಆದೇಶ ಹೊರಡಿಸಲಾಗಿದೆ. ಈ ನಿಗಮದ ನೊಂದಾವಣೆ ಮತ್ತಿತರೆ ಪ್ರಾರಂಭಿಕ ಕೆಲಸಗಳು ಪೂರ್ಣಗೊಂಡಿದ್ದು ಸನ್ಮಾನ್ಯ ಮುಖ್ಯಮಂತ್ರಿಗಳು ದಿನಾಂಕ: 17-01-2019 ರಂದು ಹೊಸ ನಿಗಮವನ್ನು ಲೋಕಾರ್ಪಣೆ ಮಾಡಲಿದ್ದಾರೆ. </p>
                  <p className="kannada">ಕರ್ನಾಟಕ ಆದಿಜಾಂಬವ ಅಭಿವೃದ್ಧಿ ನಿಗಮವು ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಶಿಷ್ಟ ಜಾತಿಯಲ್ಲಿರುವ ಮಾದಿಗ ಮತ್ತು ಅದರ ಸಂಬಂಧಿಸಿದ ಜಾತಿಗಳ ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಸರ್ಕಾರ ವಹಿಸುವ/ನಿಗದಿಪಡಿಸುವ ಯೋಜನೆ/ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಅನುಷ್ಠಾನಗೊಳಿಸುವುದು.</p>
                   <p className="kannada">2018-19 ನೇ ಸಾಲಿಗೆ ಕ್ರಿಯಾ ಯೋಜನೆ ರೂಪಿಸಿದ್ದು ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆಯಿಂದ 296.50 ಕೋಟಿ ಅನುದಾನವನ್ನು ಮಂಜೂರು ಮಾಡಲಾಗಿದೆ. ಅನುದಾನಕ್ಕೆ ತಕ್ಕಂತೆ ಜನಸಂಖ್ಯೆ ಆಧಾರದ ಮೇಲೆ ವಿಧಾನಸಭಾ ಕ್ಷೇತ್ರಾವಾರು ಗುರಿ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ.</p>
                  <p className="kannada">ಆದಿಜಾಂಬವ ಸಮುದಾಯದ ಬಂಧುಗಳು ಹೊಸ ನಿಗಮದ ಯೋಜನೆಗಳ ಸಧ್ಬಳಕೆ ಮಾಡಿಕೊಂಡು ಆರ್ಥಿಕವಾಗಿ ಮತ್ತು ಸಾಮಾಜಿಕವಾಗಿ ಸಧೃಡರಾಗಬೇಕೆಂದು ನಿಗಮವು ಆಶಿಸುತ್ತದೆ.</p>
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
