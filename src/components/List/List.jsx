import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './ListStyles';

const List = ({ places }) => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Ravintolat, hotellit ja nähtävyydet</Typography>
            <FormControl className={ classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Ravintolat</MenuItem>
                    <MenuItem value="hotels">Hotellit</MenuItem>
                    <MenuItem value="attractions">Nähtävyydet</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={ classes.formControl}>
                <InputLabel>Arvostelu</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>Kaikki</MenuItem>
                    <MenuItem value={3}>Yli 2.0</MenuItem>                    
                    <MenuItem value={3}>Yli 3.0</MenuItem>
                    <MenuItem value={4}>Yli 4.0</MenuItem>
                    <MenuItem value={4.5}>Yli 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>            
        </div>
    )
}

export default List;