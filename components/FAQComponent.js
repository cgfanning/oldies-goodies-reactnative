import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { QUESTIONS } from '../shared/questions';

function Announce() {
    return (
        <Card>
            <Text>
                Something about the food options
            </Text>
        </Card>
    );//end return
}//end function Announce

class FAQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: QUESTIONS
        };//end state
    }//end constructor

    static navigationOptions = {
        title: 'FAQ'
    };//end navigationOptions

    render() {

        const renderQuestion = ({item}) => {
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

                <Card title = 'FAQ'>
                    <FlatList 
                        data = {this.state.questions}
                        renderItem = { renderQuestion }
                        keyExtractor = {item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );//end return
    }//end render
}//end class FAQ

export default FAQ;