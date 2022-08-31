import React from "react";
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from "react-native-maps";

const GeoMap = (props) => (
  <MapView
    provider={PROVIDER_GOOGLE}
    style={props.mapStyle}
    region={props.region}
    mapType="standard"
    initialRegion={props.initialRegion}
    showsMyLocationButton={true}
    followUserLocation={true}
    showsUserLocation={true}
    loadingEnabled={true}
    initialZoom={0}
  >
    <Polyline
      coordinates={props.coordinates}
      strokeColor="blue"
      strokeWidth={6}
    />
    {Array.isArray(props?.coordinate) &&
      props.coordinates.map((marker, index) => (
        <Marker key={index} coordinate={marker} />
      ))}
  </MapView>
);

export default GeoMap;
