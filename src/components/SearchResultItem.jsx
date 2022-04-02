import { useContext } from "react";
import { MapContext } from "../context";
import styled from "styled-components"


const SearchResultItem = ({ place, setActiveId, activeId }) => {

    const { id, text_en, place_name, center, } = place

    // Get Context Data (Global State)
    const { map } = useContext(MapContext);

    const handleNewSearch = () => {
        // Hide the menu when we go to a new place listed in aour menu 
        const resultBox = document.querySelector(".menu-results");
        if (resultBox) resultBox.style.display = "none";

        // Desestructuring longitude and latitude from the props
        const [long, lat] = center;

        // setActiveId allow us mark the selected item on the menu
        setActiveId(id);

        // Fly to the selected location on the menu 
        map?.flyTo({
            zoom: 14,
            center: [long, lat],
        });
    };

    return (
        <ListItem
            // if props.activeId === props.id then we going to apply the styles to mark this element as active
            className={activeId === id ? "active" : ""}
            id={id}
            onClick={handleNewSearch}
        >
            <Title>{text_en}</Title>
            <Description className="description">
                {place_name}
            </Description>
        </ListItem>
    );
};

export default SearchResultItem;

// Styles

const ListItem = styled.li`
    position: relative;
    display: block;
    padding: 0.5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    width: 100%;
    text-align: inherit;
    cursor: pointer;
    margin: 3px 0;
    border-radius: 6px;

    
`
const Description = styled.p`
    color: #6c757d;
    font-size: 12px !important;
`

const Title = styled.h6`
    font-size: 14px;
    padding: 5px 0;
`