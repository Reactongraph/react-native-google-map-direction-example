//@flow
import React, {Component, useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from 'src/components/Header';
import CommonHelper from 'src/utils/helper';
import GeoMap from 'src/components/GeoMap';
import Button from 'src/components/Button';

const Helper = new CommonHelper();

const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = 0.005;
const MAP_DIRECTION_COORDINATES = [];
let GeoMapDirection = null;

const Home = () => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [route, setRoute] = useState([]);

  useEffect(async () => {
    const currentLocation = await Helper.getPosition();
    console.log('currentLocation===>', currentLocation);
    setRegion({
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  }, []);

  const handleStartJourney = () => {
    GeoMapDirection = setInterval(async () => {
      const currentLocation = await Helper.getPosition();
      MAP_DIRECTION_COORDINATES.push(currentLocation);
    }, 5000);
  };

  const handleEndJourney = () => {
    clearInterval(GeoMapDirection);
    setRoute({route: MAP_DIRECTION_COORDINATES});
  };
  return (
    <View style={styles.container}>
      <Header title="Google Map Directions" />
      {console.log('KKKKKKK')}
      <View style={styles.mapContainer}>
        <GeoMap
          mapStyle={styles.map}
          region={region}
          initialRegion={region}
          coordinates={route}
        />
        <View style={styles.buttonWrapper}>
          <Button
            buttonText="Start Journey"
            onPress={handleStartJourney}
            style={styles.buttonView}
            buttonTextStyle={styles.buttonTextStyle}
          />
          <Button
            buttonText="End Journey"
            onPress={handleEndJourney}
            style={styles.buttonView}
            buttonTextStyle={styles.buttonTextStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
