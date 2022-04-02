// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import { useContext, useLayoutEffect } from "react";
import { PlacesContext, MapContext } from "../context";
import styled from "styled-components"

export const Map = () => {
    const { isLoading, userLocation } = useContext(PlacesContext);
    const { setMap } = useContext(MapContext);

    const hiddeMenu = () => {
        // Hidde the menu when user make click on the map
        const resultBox = document.querySelector(".menu-results");
        if (resultBox) resultBox.style.display = "none";
    }

    useLayoutEffect(() => {

        // It will be executed when the userPosition is changed;
        // This allow me us to be sure that the map will always haave a location

        if (!isLoading) {

            // Load the map

            const map = new mapboxgl.Map({
                container: "map",
                style: "mapbox://styles/mapbox/streets-v11",
                center: userLocation,
                zoom: 14,
            });

            setMap(map);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, userLocation]);


    return (
        <MapContainer
            id="map"
            onClick={hiddeMenu}
        >
            {/* {userLocation?.join(",")} */}
        </MapContainer>
    );
};

// Styles

const MapContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
`
