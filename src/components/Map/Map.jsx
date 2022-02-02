import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlineIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './MapStyles';

const Map = () => {
    const classes = useStyles();
    // if the width of the device is > 600px, it is not considered a mobile device
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = { lat: 0, lng: 0 }
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBm_74cKUbqBGtgjjyQFW5VNgI3MuaZB40' }} // API key
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;