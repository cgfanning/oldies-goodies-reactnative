import React, { Component } from 'react';
import { Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Card, ListItem, PricingCard } from 'react-native-elements';
import { APPETIZERS } from '../shared/appetizers';

function Announce() {
    return (
        <Card>
            <Text style = {{textAlign: 'center'}}>Order your appetizers here!</Text>
        </Card>
    );//end return
}//end function Announce

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

    render() {

        const renderAppetizer = ({item}) => {
            return (
                <Card style = {styles.pageText}>
                    <PricingCard
                        title = {item.name}
                        price = {item.price}
                        button = {{title: 'Order'}}
                        image = {item.image}
                    />
                </Card>
            );//end return
        };

        return (
            <ScrollView  style={{backgroundColor: '#fff9e6', flex:1}}> 
                <Announce />

                <Card>
                    <FlatList 
                        data = {this.state.appetizers}
                        renderItem = { renderAppetizer }
                        keyExtractor = {item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );//end return
    }//end render
}//end class About

const styles = StyleSheet.create({
    pageText: {
        textAlign: 'center',
        fontSize: 18
    }
});//end styleSheet

export default Appetizer;