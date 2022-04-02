import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";
import { LocationMarkerIcon } from "@heroicons/react/outline"
import styled from "styled-components"

export const BtnBackLocation = () => {

    // Get the properties from the Context 
    const { map, isMapReady } = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext);

    // Return to your actual position on the map;
    const handleBackPosition = () => {
        if (!isMapReady) {
            throw new Error("Map is not ready");
        }
        if (!userLocation) {
            throw new Error("Location is unknow");
        }

        map?.flyTo({
            zoom: 14,
            center: userLocation,
        });
    };

    return (
        <MyPositionButton onClick={handleBackPosition}>
            <LocationMarkerIcon style={{ width: "25px", height: "25px" }} />
        </MyPositionButton>
    );
};

// Styles 

const MyPositionButton = styled.button`
    background-color: rgba(0, 123, 255, 0.7);
    border: none;
    outline: none;
    color: #fff;
    position: fixed;
    top: 20px;
    right: 80px;
    z-index: 999;
    border-radius: 50%;
    padding: 13px;

    :hover{
        background-color: rgba(0, 123, 255);
    }

    @media screen and (max-width: 500px) {
        top: 90%;
        right:47px;
    }

`