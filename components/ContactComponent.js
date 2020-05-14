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
            <ScrollView  style={{backgroundColor: '#fff9e6', flex:1}}>
                <Card title = "Your Reunion Committee" wrapperStyle = {{margin:20}}>
                    <Text style = {{textAlign: 'center'}}>Holly Schneider Gott</Text>
                    <Text style = {{marginBottom:10, textAlign: 'center'}}>Phone: 406-425-3444</Text>
                    <Text style = {{textAlign: 'center'}}>Jean Busse Patterson</Text>
                    <Text style = {{textAlign: 'center'}}>Linda Koch Lincoln</Text>
                    <Text style = {{textAlign: 'center'}}>Sharon Miller Crevier</Text>
                    <Text style = {{textAlign: 'center'}}>Ann Schierhold Harms</Text>
                    <Text style = {{textAlign: 'center'}}>Patrice Steele Macken</Text>
                </Card>
            </ScrollView>
        );//end return
    }//end render
}//end class About

export default Contact; 