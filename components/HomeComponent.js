import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { LOCATIONS } from '../shared/locations';
import { QUESTIONS } from '../shared/questions';
import { APPETIZERS } from '../shared/appetizers';


function Announce() {
    return (
        <ScrollView>
            <Card>
                <View>
                    <Image source={require('./images/invite.png')} style = {styles.image}/>
                </View>
            </Card>
            <Card>
                <View style = {styles.image}>
                    <Image source={require('./images/seniorsrsvp.jpg')} style = {styles.image}/>
                </View>
            </Card>
        </ScrollView>
);//end return
}//end function Announce

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: LOCATIONS,
            questions: QUESTIONS,
            appetizers: APPETIZERS
        };//end state
    }//end constructor

    static navigationOptions = {
        title: 'Home'
    }//end navigationOptions

    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff9e6', flex:1}}>
                <Announce />

            </ScrollView>
        );//end return
    }//end render
}//end class Home

const styles = StyleSheet.create({
    image: {
        height: 280,
        width: 350,
        backgroundColor: "#002633"
    }
})

export default Home;