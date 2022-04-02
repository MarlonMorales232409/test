import React, { useContext, useState } from "react";
import { PlacesContext } from "../context/places/PlacesContext";
import { override } from "./Loading";
import SearchResultItem from "./SearchResultItem";
import styled from "styled-components"
import BeatLoader from "react-spinners/BeatLoader";


export const SearchResults = () => {
    // Get Context Data (Global State)
    const { places, isLoadingPlace } = useContext(PlacesContext);

    // State to mark an item when is selected by the user
    // This state works in SearchResultItem component
    const [activeId, setActiveId] = useState("");

    // If there is no any place list on the global state then we going to show a loading indicator
    if (isLoadingPlace) {
        return (
            <LoadingContainer>
                <BeatLoader color={"#605F5E"} css={override} size={15} />
            </LoadingContainer>
        );
    } else if (places.length === 0) {
        // if the place list is empty then we going to return an empty React Fragment
        return <></>;
    }

    return (
        <ListContainer className="menu-results">
            {places.map((place) => (
                <SearchResultItem
                    key={place.id}
                    place={place}
                    activeId={activeId}
                    setActiveId={setActiveId}
                />
            ))}
        </ListContainer>
    );
};

// Styles

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;

    .active {
    z-index: 2;
    color: #fff !important;
    background-color: #0d6efd !important;
    border-color: rgb(30 64 175) !important;
    

    .description {
        color: #fff !important;
    }

    .hide_menu {
        display: none;
    }

}
`

const LoadingContainer = styled.div`
    padding: 10px;
    text-align: center;
`
