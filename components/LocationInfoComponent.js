import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { LOCATIONS } from '../shared/locations';

function RenderLocation({location}) {   
    if (location) {
        return (
            <Card
                featuredTitle = {location.name}
                image = {require('./images/raiderblue.png')}>
                <Text style = {styles.pageText}>
                    {location.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}//end RenderLocation

class LocationInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: LOCATIONS
        };
    }//end constructor

    static navigationOptions = {
        title: 'Location Information'
    };

    render() {
        const locationId = this.props.navigation.getParam('locationId');
        const location = this.state.locations.filter(location => location.id === locationId)[0];
        return <RenderLocation location={location} />;
    };//end render
}//end LocationInfo

const styles = StyleSheet.create({
    pageText: {
        textAlign: 'center',
        fontSize: 18
    }
});//end styleSheet

export default LocationInfo;