import React, { Component } from 'react';
import { View } from 'react-native';

function Announce() {
    return (
        <Card>
            <Text>
                Something about the food options
            </Text>
        </Card>
    );//end return
}//end function Announce


class RSVP extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'RSVP'
    };//end navigationOptions

    render() {
        return (
            <View />
        );
    }
}
export default RSVP;