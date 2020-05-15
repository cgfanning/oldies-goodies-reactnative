import React, { Component } from 'react';
import { FlatList, StyleSheet, ScrollView, Text } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import { LOCATIONS } from '../shared/locations';

function Announce() {
    return (
        <Card>
            <Text style = {{textAlign: 'center'}}>Click venue for more information.</Text>
        </Card>
    );//end return
}//end function Announce

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
                <Card>
                    <ListItem
                        title = {item.name}
                        subtitle = {item.description}
                        onPress = {() => navigate('LocationInfo', { locationId: item.id })}
                        leftAvatar = {{ source: require('./images/invitestar.png')}}
                    />
                </Card>
            );//end return
        };//end renderDirectoryItem

        return (
            <ScrollView>
                <Announce />

                <FlatList 
                    style = {styles.pageText}
                    data = {this.state.locations}
                    renderItem = { renderVenueItem }
                    keyExtractor = { item => item.id }
                    style={{backgroundColor: '#fff9e6', flex:1}}
                />
            </ScrollView>
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