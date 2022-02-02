import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlineIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './MapStyles';

<<<<<<< HEAD
const Map = ({ setCoordinates, setBounds, coordinates }) => {
=======
const Map = ({ setCoordinates, setBounds, coordinates}) => {
>>>>>>> fixed_branch
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
<<<<<<< HEAD

=======
>>>>>>> fixed_branch
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBm_74cKUbqBGtgjjyQFW5VNgI3MuaZB40' }} // API key
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
<<<<<<< HEAD
                // This tells GoogleMapReact that the coordinates or bounds have changed:
                onChange={(e) => {
                    console.log("mitävittua");
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
=======
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
>>>>>>> fixed_branch
                }}
                onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map;

