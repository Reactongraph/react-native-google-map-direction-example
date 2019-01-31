//@flow
import React, { Component } from 'react';
import { View } from "react-native";
import styles from './styles';
import Header from '../../components/Header'
import CommonHelper from "../../utils/helper";
import GeoMap from '../../components/GeoMap';
import Button from '../../components/Button';
import type { Region } from '../../types/GeoMapTypes';

const Helper = new CommonHelper();

type State = {
  region: Region
};

type Props = {};

const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = 0.5;
const MAP_DIRECTION_COORDINATES = [];
let GeoMapDirection=null;
export default class Home extends Component<Props, State> {

  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    route: [],
  }

  async componentDidMount() {
    const currentLocation = await Helper.getPosition();
    this.setState({
      region: {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
      }
    });
  }

    handleStartJourney =() => {
      GeoMapDirection = setInterval( async ()=> {
        const currentLocation = await Helper.getPosition();
        MAP_DIRECTION_COORDINATES.push(currentLocation);
      }, 3000);
    }

    handleEndJourney = () => {
      clearInterval(GeoMapDirection);
      this.setState({ route: MAP_DIRECTION_COORDINATES });
    }

    render() {
      return <View style={styles.container}>
          <Header title="Google Map Directions" />
          <View style={styles.mapContainer}>
            <GeoMap
              mapStyle={styles.map}
              region={this.state.region}
              initialRegion={this.state.region}
              coordinates={this.state.route}
              />
              <View style={styles.buttonWrapper}>
                <Button
                  buttonText="Start Journey"
                  onPress={this.handleStartJourney}
                  style={styles.buttonView}
                  buttonTextStyle={styles.buttonTextStyle}
                />
                <Button
                  buttonText="End Journey"
                  onPress={this.handleEndJourney}
                  style={styles.buttonView}
                  buttonTextStyle={styles.buttonTextStyle}
                />
              </View>
          </View>
        </View>;
    }
}