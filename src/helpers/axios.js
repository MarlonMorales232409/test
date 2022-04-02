import axios from "axios"

// Axios Basic Configuration to get the mapbox api data

export const request = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
    params: {
        limit: 5,
        language: "en",
        access_token: process.env.REACT_APP_ACCESS_TOKEN
    }
})