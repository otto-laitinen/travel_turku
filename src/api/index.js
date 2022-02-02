import axios from 'axios'; // axios library helps with API calls / HTTP requests

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'a18367ae17mshdc798f44c89b961p162f08jsn25f40d41b51e' // RapidAPI key. Will be converted to environment variable
  }
};

// This asynchronous function is called in App.js
export const getPlacesData = async () => {
    try {
        //request
        const { data: { data } } = await axios.get(URL, options); // Axios call
        return data;
    } catch (error){
        console.log(error)

    }
}