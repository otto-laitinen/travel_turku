import axios from 'axios'; // axios library helps with API calls / HTTP requests

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// This asynchronous function is called in App.js
export const getPlacesData = async (sw, ne) => {
    try {
        //request
        const { data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'a18367ae17mshdc798f44c89b961p162f08jsn25f40d41b51e' // RapidAPI key. Will be converted to environment variable
          }
        }); // Axios call
        return data;
    } catch (error){
        console.log(error)

    }
}