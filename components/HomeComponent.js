import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Animated } from 'react-native';
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
                <View>
                    <Image source={require('./images/gatherings.jpg')} style = {styles.image}/>
                </View>
            </Card>
            <Card>
                <View>
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
            appetizers: APPETIZERS,
            scaleValue: new Animated.Value(0)
        };//end state
    }//end constructor

    animate() {
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 1200
            }
        ).start();
    }//end animate

    componentDidMount() {
        this.animate();
    }//end componentDidMount

    static navigationOptions = {
        title: 'Home'
    }//end navigationOptions

    render() {
        return (
            <Animated.ScrollView style={{transform: [{scale: this.state.scaleValue}], backgroundColor: '#fff9e6', flex:1}}>
                <Announce />
            </Animated.ScrollView>
        );//end return
    }//end render
}//end class Home

const styles = StyleSheet.create({
    image: {
        height: 280,
        width: 350,
        backgroundColor: "#002633"
    }
})//end StyleSheet

export default Home;