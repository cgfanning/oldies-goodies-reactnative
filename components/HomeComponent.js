import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { LOCATIONS } from '../shared/locations';
import { QUESTIONS } from '../shared/questions';
import { APPETIZERS } from '../shared/appetizers';

function RenderItem({item}) {
    if (item) {
        return (
            <Card 
                featuredTitle = {item.name}
                image = {require ('./images/raiderblue.png')}>
                <Text
                    style = {{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );//end return
    }
    return <View />;
}//end RenderItem

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
            <ScrollView>
                <RenderItem 
                    item={this.state.locations.filter(location => location.featured)[0]} />
                <RenderItem 
                    item={this.state.questions.filter(question => question.featured)[0]} />
                <RenderItem 
                    item={this.state.appetizers.filter(appetizer => appetizer.featured)[0]} />
            </ScrollView>
        );//end return
    }//end render
}//end class Home

export default Home;