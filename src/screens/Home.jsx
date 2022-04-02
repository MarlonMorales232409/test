import React, { useContext } from "react";
import { Map, BtnBackLocation, SearchBar, Loading } from "../components";
import { PlacesContext } from "../context";

export const Home = () => {
    // Main Component here we render the Loading or the Map depending of the isLoading state
    const { isLoading } = useContext(PlacesContext);
    return (
        <div>
            {
                isLoading ? <Loading /> : (
                    <>
                        <Map />
                        <BtnBackLocation />
                        <SearchBar />
                    </>
                )
            }

        </div>
    );
};
