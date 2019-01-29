//@flow

import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';
import Header from '../../components/Header'

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 28.5355,
                longitude: 77.3910,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5
            },
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    region: {
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }
                });
            },
            (error) => console.log(new Date(), error),
            { enableHighAccuracy: false, timeout: 10000, maximumAge: 3000 }
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <Header title="Google Map Directions" />
                <View style={styles.mapContainer}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={this.state.region}
                        mapType="standard"
                        region={this.state.coordinate}
                        initialRegion={this.state.region}
                        showsMyLocationButton={true}
                        followUserLocation={true}
                        onRegionChangeComplete={this.onRegionChange}
                        showsUserLocation={true}
                        loadingEnabled={true}
                    >
                    </MapView>
                </View>
            </View>
        );
    }
}