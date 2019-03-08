import React from 'react'
import Auxs from '../hoc/Auxs/auxs'
import HeaderBottom from '../components/Header-Bottom/headerBottom'
import PageTitle from '../components/Page-Title/pageTitle'
import OrderList from '../components/DocsList/orders'
import Odone from '../docs/P1.pdf'
import Odtwo from '../docs/P2.pdf'
import Odthree from '../docs/P3.pdf'
import { LanguageConsumer } from '../Context/context'

const CircularsPage = () => {

    

    function EnglishTemplate() {
        return(
            <Auxs>
                
                <HeaderBottom></HeaderBottom>
                <PageTitle>Orders / Circulars</PageTitle>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sec-space-small"></div>
                            <OrderList name="GOVT. Orders 01" url={Odone} view="view" download="download" />
                            <OrderList name="GOVT. Orders 02" url={Odtwo} view="view" download="download"  />
                            <OrderList name="GOVT. Orders 03" url={Odthree} view="view" download="download"  />
                            <div className="sec-space-small"></div>
                        </div>
                    </div>
                </div>
                <div className="sec-space"></div>
            </Auxs>
        )
    }
    

    function KannadaTemplate() {
        return(
            <Auxs>
                <HeaderBottom></HeaderBottom>
                <PageTitle>ಆದೇಶಗಳು / ಸರ್ಕ್ಯುಲರ್ಗಳು</PageTitle>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="sec-space-small"></div>
                            <OrderList name="GOVT. ಆದೇಶಗಳು 01" url={Odone} view="ನೋಟ" download="ಡೌನ್ಲೋಡ್ ಮಾಡಿ"  />
                            <OrderList name="GOVT. ಆದೇಶಗಳು 02" url={Odtwo} view="ನೋಟ" download="ಡೌನ್ಲೋಡ್ ಮಾಡಿ"  />
                            <OrderList name="GOVT. ಆದೇಶಗಳು 03" url={Odthree} view="ನೋಟ" download="ಡೌನ್ಲೋಡ್ ಮಾಡಿ"  />
                            <div className="sec-space-small"></div>
                        </div>
                    </div>
                </div>
                <div className="sec-space"></div>
            </Auxs>
        )
    }

   
  function Templates(){
    return(
        <LanguageConsumer>
          {(context) => (
          (context.language === 'kannada') ? <KannadaTemplate/> : <EnglishTemplate/>
          )}
      </LanguageConsumer>
    )
  }
  

    return(

        <Templates />

    );
}

export default CircularsPage;