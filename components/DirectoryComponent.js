import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LOCATIONS } from '../shared/locations';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: LOCATIONS
        };
    }//end constructor

    static navigationOptions = {
        title: 'Directory'
    };//end navigationOption

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress = {() => navigate('LocationInfo', { locationId: item.id })}
                    leftAvatar={{ source: require('./images/boatclub.png')}}
                />
            );//end return
        };//end renderDirectoryItem

        return (
            <FlatList 
                data = {this.state.locations}
                renderItem = { renderDirectoryItem }
                keyExtractor = { item => item.id }
            />
        );//end render
    }//end render
}//end class Directory

export default Directory;