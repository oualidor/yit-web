import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = ({center, zoom}) => {
        return (
            // Important! Always set the container height explicitly
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCwqO6Z0vBM-2jqhyTXG2rROM4dQcZYiP0" }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={center.lat}
                        lng={center.lng}
                        text="YourIT Department"
                    />
                </GoogleMapReact>
        );

}

export default GoogleMap;