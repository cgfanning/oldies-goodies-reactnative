import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { APPETIZERS } from '../shared/appetizers';

function Announce() {
    return (
        <Card>
            <Text>
                Something about the food options
            </Text>
        </Card>
    );//end return
}//end function Announce

class Appetizer extends Component {

    constructor(props) {
        super(props);
        this.state = {//change this to partners
            appetizers: APPETIZERS
        };//end state
    }//end constructor

    static navigationOptions = {
        title: 'Appetizers'
    };//end navigationOptions

    render() {//leave scrollview empty for task 1

        const renderAppetizer = ({item}) => {
            return (
                <ListItem
                        title = {item.name}
                        subtitle = {item.description}
                        leftAvatar = {{ source: require('./images/boatclub.png')}}
                />
            );//end return
        };

        return (
            <ScrollView> 
                <Announce />

                <Card title = 'Order Appetizers'>
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

export default Appetizer;