import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
<<<<<<< HEAD
    const [bounds, setBounds] = useState(null); // these bounds are the bottom left and top right coordinates

=======
    const [bounds, setBounds ] = useState(null);
    
    // Get user's location when launching the app:
>>>>>>> fixed_branch
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne) // Returns restaurant's data (from index.js) 
            .then((data) => {   // getPlacesData is an async function, hence the .then -method
                setPlaces(data);
            })
    }, [coordinates, bounds]);  // Dependency array. When coordinates / bounds change, this function runs again
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={ places }/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </>
    );
}

// export default is used to export a single class, function or primitive from a script file
export default App;