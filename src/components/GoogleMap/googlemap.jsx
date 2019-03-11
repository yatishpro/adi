import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 12.990610,
            lng: 77.596200
        },
        zoom: 15
    };


    

    render() {
        return(
            <div style={{ height: '450px', width: '100%' }} >
            <GoogleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyBELO3JwZ8iYf9dNH_cOIbpKUBUt30vl08' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <AnyReactComponent
            lat={12.990610}
            lng={77.596200}
            text={'Lidkar Bhavan'}
          />
            </GoogleMapReact>
            </div>
        )
    }
}

export default GoogleMap;