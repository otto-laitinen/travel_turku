import axios from 'axios'; // axios library helps with API calls / HTTP requests

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    // restaurant_tagcategory_standalone: '10591',
    // restaurant_tagcategory: '10591',
    // limit: '30',
    // currency: 'USD',
    // open_now: 'false',
    // lunit: 'km',
    // lang: 'en_US'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'a18367ae17mshdc798f44c89b961p162f08jsn25f40d41b51e' // RapidAPI key. Will be converted to environment variable
  }
};

// This piece of code is commented out, since the axios call is already at the bottom of this file
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// This function is called in App.js
export const getPlacesData = async () => {
    try {
        //request
        const { data: { data }} = await axios.get(URL, options); // Axios call
        return data;
    } catch (error){
        console.log(error)

    }
}