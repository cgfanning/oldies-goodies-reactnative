import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderLocation({location}) {   
    if (location) {
        return (
            <Card
                featuredTitle = {location.name}
                image = {require('./images/raiderblue.png')}>
                <Text style = {{margin: 10}}>
                    {location.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function LocationInfo(props) {
    return <RenderLocation location={props.location} />;
}

export default LocationInfo;