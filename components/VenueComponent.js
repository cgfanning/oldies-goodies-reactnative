import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LOCATIONS } from '../shared/locations';

class Venue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: LOCATIONS
        };
    }//end constructor

    static navigationOptions = {
        title: 'Venue'
    };//end navigationOption

    render() {
        const { navigate } = this.props.navigation;
        const renderVenueItem = ({item}) => {
            return (
                <ListItem
                    title = {item.name}
                    subtitle = {item.description}
                    onPress = {() => navigate('LocationInfo', { locationId: item.id })}
                    leftAvatar = {{ source: require('./images/invitestar.png')}}
                />
            );//end return
        };//end renderDirectoryItem

        return (
            <FlatList 
                style = {styles.pageText}
                data = {this.state.locations}
                renderItem = { renderVenueItem }
                keyExtractor = { item => item.id }
                style={{backgroundColor: '#fff9e6', flex:1}}
            />
        );//end render
    }//end render
}//end class Venue

const styles = StyleSheet.create({
    pageText: {
        textAlign: 'center',
        fontSize: 18
    }
});//end styleSheet

export default Venue;