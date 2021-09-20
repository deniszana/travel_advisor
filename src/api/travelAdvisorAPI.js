/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  // if (type === 'webcam') {
  //   console.log(sw, ne);
  //   const options = {
  //     method: 'GET',
  //     url: `https://webcamstravel.p.rapidapi.com/webcams/list/nearby=${sw.lat},${sw.lng},30`,
  //     params: { lang: 'fr', show: 'webcams:image,location' },
  //     headers: {
  //       'x-rapidapi-host': 'webcamstravel.p.rapidapi.com',
  //       'x-rapidapi-key': '56de950e1bmsh5678e173d1cdb2ap1a6b03jsn6e98bc973a51',
  //     },
  //   };
  //   await axios.request(options).then((response) => {
  //     console.log('reponse', response);
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // } else {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
//  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
/*
export const getWebCamRapidData = async (sw, ne) => {
  try {
    const url = `https://webcamstravel.p.rapidapi.com/webcams/list/bbox=${ne.lat},${ne.lng},${sw.lat},${sw.lng}`;
    const { data } = await axios.get(url, {
      params: { lang: 'fr', show: 'webcams:image,location,player,category' },
      headers: {
        'x-rapidapi-host': 'webcamstravel.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEBCAM_API_KEY,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
*/

export const getWebCamData = async (sw, ne) => {
  try {
    // const url_old = `https://webcamstravel.p.rapidapi.com/webcams/list/nearby=${sw.lat},${sw.lng},30`;
    const url = `https://api.windy.com/api/webcams/v2/list/bbox=${ne.lat},${ne.lng},${sw.lat},${sw.lng}`;
    const { data } = await axios.get(url, {
      params: { lang: 'en', show: 'webcams:image,location,player,category' },
      headers: {
        'x-windy-key': process.env.REACT_APP_WINDY_API_WEBCAM_API_KEY,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

