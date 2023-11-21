import "bootstrap";
import "../styles/normalize.css";
import "../scss/styles.scss";
import { BOUNDARIES } from "../config/spatialConstants";

function rollPanorama(BOUNDARIES) {
  const rollLat = randomCoordinate(BOUNDARIES.south, BOUNDARIES.north);
  const rollLng = randomCoordinate(BOUNDARIES.east, BOUNDARIES.west);
  const rollPosition = new google.maps.LatLng({ lat: rollLat, lng: rollLng });
}

const randomCoordinate = (min, max) => Math.random() * (max - min) + min;

const svService = new google.maps.StreetViewService();
let panorama = new google.maps.StreetViewPanorama(document.getElementById("container-streetView"));
