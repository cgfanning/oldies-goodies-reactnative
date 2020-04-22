import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import LocationInfo from './LocationInfoComponent';
import { LOCATIONS } from '../shared/locations';
import { View } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          locations: LOCATIONS,
          selectedLocation: null
        };
    }

    onLocationSelect(locationId) {
        this.setState({selectedLocation:locationId});
    }

    render() {
        return (
            <View style = {{flex:1}}>
                <Directory locations = {this.state.locations} onPress = {locationid => this.onLocationSelect(locationid)}
                />
                <LocationInfo location = {this.state.locations.filter(location => location.id === this.state.selectedLocation)[0]}
                />
            </View>
        );
    }
}

export default Main;