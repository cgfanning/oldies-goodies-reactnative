import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component {

    constructor(props) {
        super(props);
    }//end constructor

    static navigationOptions = {
        title: 'Contact Us'
    };//end navigationOptions

    render() {
        return (//task 2 the whole Card
            <ScrollView>
                <Card title = "Your Reunion Committee" wrapperStyle = {{margin:20}}>
                    <Text>Holly Schneider Gott</Text>
                    <Text>Phone: 406-425-3444</Text>
                    <Text>Jean Busse Patterson</Text>
                    <Text>Linda Koch Lincoln</Text>
                    <Text>Sharon Miller Crevier</Text>
                    <Text>Ann Schierhold Harms</Text>
                    <Text>Patrice Steele Macken</Text>
                </Card>
            </ScrollView>
        );//end return
    }//end render
}//end class About

export default Contact; 