import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { APPETIZERS } from '../shared/appetizers';

function Announce() {
    return (
        <Card>
            <Text style = {{textAlign: 'center'}}>Order your appetizers here!</Text>
        </Card>
    );//end return
}//end function Announce

function RenderAppetizer() {
    return (
        <ScrollView>
        </ScrollView>
    );
}//end renderAppetizer

class Appetizer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appetizers: APPETIZERS
        };//end state
    }//end constructor

    static navigationOptions = {
        title: 'Appetizers'
    };//end navigationOptions

    handleOrder() {
        Alert.alert(
            "Order Received"
        )
    }//end handleOrder


    render() {
        return (
            <ScrollView  style={{backgroundColor: '#fff9e6', flex:1}}> 
                <Announce />

                <Card style = {styles.cardStyle}>
                <View>
                    <Image source={require('./images/calamariprice.jpg')} style = {styles.image}/>
                    <View style = {{margin: 10}}>
                        <Button
                            title = 'Add to Order'
                            color = '#002633'
                            onPress = {() => {
                               this.handleOrder();
                            }}
                        />
                    </View>
                </View>
            </Card>
            <Card>
                <View>
                    <Image source={require('./images/mozzsticksprice.jpg')} style = {styles.image}/>
                    <View style = {{margin: 10}}>
                        <Button
                            title = 'Add to Order'
                            color = '#002633'
                            onPress = {() => {
                                this.handleOrder();
                            }}
                        />
                    </View>
                </View>
            </Card>
            <Card>
                <View>
                    <Image source={require('./images/wingsprice.jpg')} style = {styles.image}/>
                    <View style = {{margin: 10}}>
                        <Button
                            title = 'Add to Order'
                            color = '#002633'
                            onPress = {() => {
                                this.handleOrder();
                            }}
                        />
                    </View>
                </View>
            </Card>
            <Card>
                <View>
                    <Image source={require('./images/pizzaprice.jpg')} style = {styles.image}/>
                    <View style = {{margin: 10}}>
                        <Button
                            title = 'Add to Order'
                            color = '#002633'
                            onPress = {() => {
                                this.handleOrder();
                            }}
                        />
                    </View>
                </View>
            </Card>
            </ScrollView>
        );//end return
    }//end render
}//end class About

const styles = StyleSheet.create({
    pageText: {
        textAlign: 'center',
        fontSize: 18
    },
    image: {
        height: 280,
        width: 350,
        backgroundColor: "#002633"
    },
    cardStyle: {
        backgroundColor: "#002633"
    }
});//end styleSheet

export default Appetizer;