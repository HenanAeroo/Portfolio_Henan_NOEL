import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const apiKey = "";

  const containerStyle = {
    width: "600px",
    height: "400px",
  };

  // Coordonnées pour Rennes Ynov Campus
  const center = {
    lat: 48.1134,
    lng: -1.674,
  };

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
