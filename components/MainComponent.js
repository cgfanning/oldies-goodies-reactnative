import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import LocationInfo from './LocationInfoComponent';
import { View, Platform  } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        LocationInfo: { screen: LocationInfo }
    },
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);//end DirectoryNavigator

class Main extends Component {
    render() {
        return (
            <View style = {{ flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <DirectoryNavigator />
            </View>
        );//end return
    }//end render
}//end class Main

export default Main;