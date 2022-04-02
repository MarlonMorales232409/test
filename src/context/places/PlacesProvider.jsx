import React, { useEffect, useReducer } from "react";
import { getUserLocation, request } from "../../helpers";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";

const INITIAL_STATE = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlace: false,
    places: [],
};


export const PlacesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {

        // Set the default location
        getUserLocation().then((coords) => {

            // Dispathc the user location
            dispatch({ type: "setUserLocation", payload: coords });

        }).catch((err) => {

            // If the user location is not available, we going to use a default location 
            // (Barcelona coords[2.1699241, 41.3879])
            dispatch({ type: "setUserLocation", payload: [2.1699241, 41.3879] });

        });

    }, []);


    const searchPlaces = async (query) => {

        if (query.length === 0) {
            dispatch({ type: "setPlaces", payload: [] });
            return [];
        }

        // Show a loading indicator when the request is in progress
        dispatch({ type: "setLoadingPlaces" });

        // Request
        const placeData = await request.get(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(","),
            },
        });

        // Dispathc the info that we get by the request
        dispatch({ type: "setPlaces", payload: placeData.data.features });
        return placeData.data.features;
    };

    return (
        <PlacesContext.Provider value={{ ...state, searchPlaces }}>
            {children}
        </PlacesContext.Provider>
    );
};

export default PlacesProvider;
