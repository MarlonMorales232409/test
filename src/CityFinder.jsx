import { MapProvider, PlacesProvider } from "./context";
import { Home } from "./screens";

const CityFinder = () => {
    // Place Context and Map Context Wrapper
    return (
        <PlacesProvider>
            <MapProvider>
                <Home />
            </MapProvider>
        </PlacesProvider>
    );
};

export default CityFinder;
