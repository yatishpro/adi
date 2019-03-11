import React, {Component} from 'react'
import Auxs from '../hoc/Auxs/auxs'
import { LanguageConsumer } from '../Context/context'
import PageTitle from '../components/Page-Title/pageTitle'
import gOne from '../images/gallery/01.jpg'
import gTwo from '../images/gallery/02.jpg'
import gThree from '../images/gallery/03.jpg'
import gFour from '../images/gallery/04.jpg'
import gFive from '../images/gallery/05.jpg'
import gSix from '../images/gallery/06.jpg'
import gSeven from '../images/gallery/07.jpg'
import gEignt from '../images/gallery/08.jpg'
import gNine from '../images/gallery/09.jpg'
import gTen from '../images/gallery/010.jpg'

class Gallery extends Component {

    state = {
        photo: true
    };


    displayVideo =  () => {
        this.setState({
            photo: true
        });
        
    };

    displayPhoto = () => {
        this.setState({
            photo: false
        });
    };

      KannadaTemplate() {
        return(
            <Auxs>
                <div className="sec-space"></div>
                <PageTitle>ಗ್ಯಾಲರಿ</PageTitle>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallerySwitch">
                                <div className="photoSwitch">
                                    <div className={this.state.photo ? 'button active' : 'button' } onClick={this.displayVideo} >
                                        <i className="fa fa-image"></i>
                                        <p>ಫೋಟೋಗಳು</p>
                                    </div>
                                </div>
                                <div className="videoSwitch">
                                    <div className={this.state.photo ? 'button' : 'button active' } onClick={this.displayPhoto} >
                                        <i className="fa fa-play"></i>
                                        <p>ವೀಡಿಯೊಗಳು</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Auxs>
        )
      }

     EnglishTemplate() {
           return(
            <Auxs>
                <div className="sec-space"></div>
                <PageTitle>Gallery</PageTitle>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gallerySwitch">
                                <div className="photoSwitch">
                                    <div className={this.state.photo ? 'button active' : 'button' } onClick={this.displayVideo} >
                                        <i className="fa fa-image"></i>
                                        <p>Photos</p>
                                    </div>
                                </div>
                                <div className="videoSwitch">
                                    <div className={this.state.photo ? 'button' : 'button active' } onClick={this.displayPhoto} >
                                        <i className="fa fa-play"></i>
                                        <p>Videos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Auxs>
           )
     }

     PhotoGallery() {
         return(
             <div className="gallery">
                <div className="sec-space"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={gOne} className="gal-img" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src={gTwo} className="gal-img" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src={gThree} className="gal-img" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src={gFour} className="gal-img" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src={gFive} className="gal-img" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src={gSix} className="gal-img" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src={gSeven} className="gal-img" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src={gEignt} className="gal-img" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src={gNine} className="gal-img" alt=""/>
                        </div>
                        <div className="col-md-3">
                            <img src={gTen} className="gal-img" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="sec-space"></div>
             </div>
         )
     }

      Template() {
          return(
            <LanguageConsumer>
                 {(context) => (
                    (context.language === 'kannada') ? this.KannadaTemplate() : this.EnglishTemplate()
                )}
             </LanguageConsumer>
          )
      }
             

    render(){
        if(this.state.photo){
            return(
                <div>
                    {this.Template()}
                    {this.PhotoGallery()}
                </div>
             )
        } else {
            return(
                <div>
                    {this.Template()}
                    
                </div>
             )
        }
    }
}

export default Gallery;