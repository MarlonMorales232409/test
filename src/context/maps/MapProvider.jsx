// eslint-disable-next-line import/no-webpack-loader-syntax
import { Marker, Popup } from "!mapbox-gl";
import { useContext, useEffect, useReducer } from "react";
import { PlacesContext } from "../places/PlacesContext";
import { MapContext } from "./MapContext";
import { mapReducer } from "./mapReducer";

const INITAL_STATE = {
    isMapReady: false,
    map: undefined,
    markers: []
};


export const MapProvider = ({ children }) => {
    // useReducer Hook to work with map Reducer 
    const [state, dispatch] = useReducer(mapReducer, INITAL_STATE);

    // get the places array from the PlacesContext
    const { places } = useContext(PlacesContext)

    useEffect(() => {
        // Remove all posible markers on the map before get the new markers
        state.markers.forEach(marker => marker.remove());

        const newMarkers = []

        // Configuring the popup data and the coords in each new popup
        for (const place of places) {
            const [long, lat] = place.center;
            const popup = new Popup().setHTML(`
            <h3>${place.text_en}</h3>
            <p>${place.place_name}</p>
        `)

            // Making a new Marker 
            const marker = new Marker()
                .setPopup(popup)
                .setLngLat([long, lat])
                .addTo(state.map)

            newMarkers.push(marker)
        }

        // update the markers array on the global state
        dispatch({ type: "setMarkers", payload: newMarkers })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [places])

    const userPopup = new Popup().setHTML(
        `<h3>I'm here<h3/>`
    );

    // Map config and my location marker styles
    const setMap = (map) => {
        new Marker({
            color: "#FF0000",
        })
            .setLngLat(map.getCenter())
            .addTo(map)
            .setPopup(userPopup);
        // Dispathc the action that will load the map on the state
        dispatch({ type: "setMap", payload: map });
    };

    return (
        <MapContext.Provider value={{ ...state, setMap }}>
            {children}
        </MapContext.Provider>
    );
};
