import ReactDOM from "react-dom/client";
import CityFinder from "./CityFinder";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import "./globals.css";

mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
ReactDOM.createRoot(rootElement).render(<CityFinder />);
