import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';


class Contact extends Component {

    constructor(props) {
        super(props);
    }//end constructor

    static navigationOptions = {
        title: 'Contact Us'
    };//end navigationOptions

    render() {
        return (
            <ScrollView  style={{backgroundColor: '#fff9e6', flex:1}}>
                <Card title = "Your Reunion Committee" wrapperStyle = {{margin:20}}>
                    <Text style = {styles.pageText}>Holly Schneider Gott</Text>
                    <Text style = {styles.pageText}>Phone: 406-425-3444</Text>
                    <Text style = {{marginBottom:5, fontSize: 18, textAlign: 'center'}}>Email: Holly@eastridgereunion.co</Text>
                    <Button
                        title = "Send Email"
                        buttonStyle = {{backgroundColor: '#002633', margin: 10}}
                        icon = {<Icon
                            name = 'envelope-o'
                            type = 'font-awesome'
                            color = '#fff'
                            iconStyle = {{marginRight: 10}}
                        />}
                    />
                    <Text style = {styles.pageText}>Jean Busse Patterson</Text>
                    <Text style = {styles.pageText}>Linda Koch Lincoln</Text>
                    <Text style = {styles.pageText}>Sharon Miller Crevier</Text>
                    <Text style = {styles.pageText}>Ann Schierhold Harms</Text>
                    <Text style = {styles.pageText}>Patrice Steele Macken</Text>
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

export default Contact; 