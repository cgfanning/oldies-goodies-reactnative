import React, { Component } from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { QUESTIONS } from '../shared/questions';

function Announce() {
    return (
        <Card>
            <Text style = {{textAlign: 'center'}}>
                We know you may have many questions about attending our reunion. These are just a few that we hear the most. Feel free to send an email through our Contact page if you need other answers.
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
                        leftAvatar = {{ source: require('./images/invitestar.png')}}
                />
            );//end return
        };//end renderQuestion

        return (
            <ScrollView  style={{backgroundColor: '#fff9e6', flex:1}}> 
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