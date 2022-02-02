import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds ] = useState(null);

    // The useEffect Hook allows you to perform side effects in your components.
    // Some examples of side effects are: fetching data, directly updating the DOM, and timers.
    useEffect(() => {
        getPlacesData() // this function (in index.js) returns the restaurant's data
            .then((data) => {   // this then method is here, because getPlacesData is an async function
                console.log(data);
                setPlaces(data);
            })
    }, []); // this dependency array is empty, so the code in this function block will only happen at the start of the application
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
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