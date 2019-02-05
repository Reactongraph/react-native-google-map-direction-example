//@flow
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
import type { Region } from 'src/types/GeoMapTypes';

type Props = {
  mapStyle: Object,
  initialRegion: Region,
  coordinates: Array<Region>,
  region: Region
};

const GeoMap = (props: Props) => (
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
  >
    <Polyline
      coordinates={props.coordinates}
      strokeColor="blue"
      strokeWidth={6}
    />
    {props.coordinates &&
      props.coordinates.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker}
        />
      ))}
  </MapView>
);

export default GeoMap;
