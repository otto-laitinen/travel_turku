import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getPlacesData() // this function (in index.js) returns the restaurant's data
            .then((data) => {
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
                    <Map />
                </Grid>
            </Grid>
        </>
    );
}

// export default is used to export a single class, function or primitive from a script file
export default App;