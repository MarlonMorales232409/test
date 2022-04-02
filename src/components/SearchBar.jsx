import React, { useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";
import styled from "styled-components"
import { SearchIcon } from "@heroicons/react/outline";

export const SearchBar = () => {

    // Contenxt DATA (State Data)
    const { searchPlaces } = useContext(PlacesContext);
    // This ref is used  to work with the timer on handleInputChange()
    const debaunceRef = useRef();

    const showMenu = () => {
        // Show a menu with all results coming from the MapBox API
        const resultBox = document.querySelector(".menu-results");
        if (resultBox) resultBox.style.display = "flex";
    }


    const handleInputChange = (event) => {
        // This function get the user query and set a timer to make the request (350ms)
        if (debaunceRef.current) {
            clearTimeout(debaunceRef.current);
        }

        debaunceRef.current = setTimeout(() => {
            // execute Request function the after 350ms 
            searchPlaces(event.target.value);
        }, 350);
    };

    return (
        <FormContainner>
            <InputContainer>
                <SearchIconContainer>
                    <SearchIcon className="search_icon" />
                </SearchIconContainer>
                <input
                    type="text"
                    placeholder="Search some Place or City"
                    onChange={handleInputChange}
                    onClick={showMenu}
                />
            </InputContainer>
            <SearchResults />
        </FormContainner>
    );
};

// Styles

const FormContainner = styled.form`
    position: fixed;
    top: 20px;
    left: 35px;
    background-color: rgba(255,255,255,0.5);
    width: 22%;
    padding: 10px;
    border-radius: 7px;
 
    .results{
        display: none;
    }

    @media screen and (max-width: 912px) {
        width: 26%;
    }

    @media screen and (max-width: 661px) {
        width: 37%;
    }

    @media screen and (max-width: 500px) {
        width: 85%;
        left: 23px;
    }
`

const InputContainer = styled.label`
    position: relative;
    display: block;

    input {
        background-color: #fff;
        display: block;
        width: 100%;
        height: 3rem;
        border-radius: 0.375rem;
        border-width: 1px;
        border-color: rgb(203 213 225);
        padding-top: 0.5rem; 
        padding-bottom: 0.5rem;
        padding-right: 0.75rem;
        padding-left: 2.25rem;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        margin-bottom: 10px;
    }
`

const SearchIconContainer = styled.span`
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    .search_icon {
        height: 1.25rem;
        width: 1.25rem;
        /* fill: #6b7280; */
        color: rgb(148 163 184);
    }

`