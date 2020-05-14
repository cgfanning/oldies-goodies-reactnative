import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import LocationInfo from './LocationInfoComponent';
import Appetizer from './AppetizerComponent';
import Contact from './ContactComponent';
import FAQ from './FAQComponent';
import RSVP from './RSVPComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#002633'
            },
            headerTintColor: '#e69d00',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);//end HomeNavigator

const DirectoryNavigator = createStackNavigator(
    {
        Directory: {
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        LocationInfo: { screen: LocationInfo }
    },
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#002633'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }//end DirectoryNavigator
    }
);//end DirectoryNavigator

const AppetizerNavigator = createStackNavigator(
    {
        Appetizer: { screen: Appetizer }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#002633'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='cutlery'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);//end AboutNavigator

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#002633'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='address-card'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);//end Contact Navigator

const FAQNavigator = createStackNavigator(
    {
        FAQ: { screen: FAQ }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#002633'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='info-circle'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);//end Contact Navigator

const RSVPNavigator = createStackNavigator(
    {
        RSVP: { screen: RSVP }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#002633'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='star'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);//end Contact RSVP

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/raiderblue.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Class of 1970</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name = 'home'
                        type = 'font-awesome'
                        size = {24}
                        color = {tintColor}
                    />
                )
            }
        },//end Home screen navigation options
        Directory: {
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },//end Directory screen navigation options
        FAQ: {
            screen: FAQNavigator,
            navigationOptions: {
                drawerLabel: 'FAQ',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },//end FAQ screen navigation options
        RSVP: {
            screen: RSVPNavigator,
            navigationOptions: {
                drawerLabel: 'RSVP',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='star'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },//end RSVP screen navigation options
        About: {
            screen: AppetizerNavigator,
            navigationOptions: {
                drawerLabel: 'Appetizers',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='cutlery'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },//end Appetizer screen navigation options
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        }//end Contact screen navigation options
    },
    {
        drawerBackgroundColor: '#fff9e6',
        contentComponent: CustomDrawerContentComponent
    }
);//end MainNavigator

class Main extends Component {
    render() {
        return (
            <View style={styles.main}>
                <MainNavigator />
            </View>
        );//end return
    }//end render
}//end class Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        backgroundColor: '#fff9e6', 
        flex: 1, 
        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
    },
    drawerHeader: {
        backgroundColor: '#002633',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});//end styleSheet

export default Main;