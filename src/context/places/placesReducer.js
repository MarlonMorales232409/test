
// Place Reducer;

// setUserLocation: Set the default location it could be the user location or Barcelona city
// setLoadingPlaces: Allow us to show the loader and set places array to an empty array
// setPlaces: Set the places comming from the api request to the places array

export const placesReducer = (state, action) => {
    switch (action.type) {
        case "setUserLocation":
            return { ...state, isLoading: false, userLocation: action.payload }

        case "setLoadingPlaces":
            return { ...state, isLoadingPlace: true, places: [] }

        case "setPlaces":
            return { ...state, isLoadingPlace: false, places: action.payload }

        default:
            return state;
    }
}