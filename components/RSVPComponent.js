import React, { Component } from 'react';
import { ScrollView, View, Image, Button, StyleSheet, Switch } from 'react-native';
import { Card, Text, Input, CheckBox } from 'react-native-elements';

function Announce() {
    return (
        <Card>
                <View>
                    <Image source={require('./images/invite.png')} style = {styles.image}/>
                </View>
            </Card>
    );//end return
}//end function Announce


class RSVP extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            guest: false,
            checkbox1: false,
            checkbox2: false,
            phone: '',
            email: '',
            comments: '',
        }
    }//end constructor

    static navigationOptions = {
        title: 'RSVP'
    };//end navigationOptions

    handleRSVP() {
        console.log(JSON.stringify(this.state));
    }//end handleRSVP

    resetForm() {
        this.setState({
            firstname: '',
            lastname: '',
            checkbox1: false,
            checkbox2: false,
            guest: false,
            phone: '',
            email: '',
            comments: '',
            showModal: false
        });
    }//end resetForm

    render() {
        return (
            <ScrollView  style={{backgroundColor: '#fff9e6', flex:1}}>
                <Announce />

                <Card>
                    <Text style = {styles.formLabel}>Will You Attend?</Text>
                    <View style = {{margin: 10}}>
                        <CheckBox
                            title = 'Count Me In!'
                            checked = {this.state.checkbox1}
                            onPress = {() => this.setState({checkbox1: !this.setState.checkbox1})}
                        />
                        <CheckBox
                            title = "Can't Make It"
                            checked = {this.state.checkbox2}
                            onPress = {() => this.setState({checkbox2: !this.setState.checkbox2})}
                        />
                    </View>
                    <Input
                        style = {styles.formRow}
                        placeholder = 'First Name'
                        leftIcon = {{ type: 'font-awesome', name: 'user' }}
                        leftIconContainerStyle = {{ paddingRight: 20 }}
                        onChangeText = {(value) => this.setState({ firstname: value })}
                        value = {this.state.firstname}
                    />
                    <Input
                        style = {styles.formRow}
                        placeholder = 'Last Name'
                        leftIcon = {{ type: 'font-awesome', name: 'user' }}
                        leftIconContainerStyle = {{ paddingRight: 20 }}
                        onChangeText = {(value) => this.setState({ lastname: value })}
                        value = {this.state.lastname}
                    />
                    <View style = {styles.formRow}>
                        <Text style = {styles.formLabel}>Bringing a Guest?</Text>
                        <Switch
                            style = {styles.formItem}
                            value = {this.state.guest}
                            trackCOlor = {{true: '#5637DD', false: null}}
                            onValueChange = {value => this.setState({guest: value})}>
                        </Switch>
                    </View>
                    <Input
                        style = {styles.formRow}
                        placeholder = 'Phone Number'
                        leftIcon = {{ type: 'font-awesome', name: 'phone' }}
                        leftIconContainerStyle = {{ paddingRight: 20 }}
                        onChangeText = {(value) => this.setState({ phone: value })}
                        value = {this.state.phone}
                    />
                    <Input
                        style = {styles.formRow}
                        placeholder = 'Email'
                        leftIcon = {{ type: 'font-awesome', name: 'envelope' }}
                        leftIconContainerStyle = {{ paddingRight: 15 }}
                        onChangeText = {(value) => this.setState({ email: value })}
                        value = {this.state.email}
                    />
                    <Input
                        placeholder = 'Comments'
                        leftIcon = {{ type: 'font-awesome', name: 'comment' }}
                        leftIconContainerStyle = {{ paddingRight: 15 }}
                        onChangeText = {(value) => this.setState({ comments: value })}
                        value = {this.state.comments}
                    />
                    <View style = {{margin: 10}}>
                        <Button
                            title = 'Submit RSVP'
                            color = '#002633'
                            onPress = {() => {
                                this.handleRSVP();
                                this.resetForm();
                            }}
                        />
                    </View>
                </Card>
            </ScrollView>
        );//end return
    }//end render
}//end class RSVP

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 30
    },
    formLabel: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    image: {
        height: 280,
        width: 350,
        backgroundColor: "#002633"
    }
});//end StyleSheet

export default RSVP;