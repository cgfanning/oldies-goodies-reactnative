import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';

function Announce() {
    return (
        <Card>
            <Text style = {{textAlign: 'center'}}>Join us for our</Text>
            <Text style = {{textAlign: 'center'}}>50th Class Reunion!</Text>
        </Card>
    );//end return
}//end function Announce


class RSVP extends Component {

    constructor(props) {
        super(props);
    }//end constructor

    static navigationOptions = {
        title: 'RSVP'
    };//end navigationOptions

    render() {
        return (
            <ScrollView>
                <Announce />
            </ScrollView>
        );
    }//end render
}//end class RSVP
export default RSVP;