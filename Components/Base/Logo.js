import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Logo extends Component {
    
    constructor(props) {
        super(props)

        this.textcolor = props.textcolor === undefined ? '#FFF' : props.textcolor
        this.backgroundColor = props.backgroundColor === undefined ? '#eb3b5a' : props.backgroundColor       
    }

    render () {
        return (
            <View style={[styles.logowrapper, {paddingBottom: this.props.marginBottom}]}>
                <Icon.Button 
                    name="link"
                    size={this.props.scale}
                    color={this.textcolor}
                    style={{backgroundColor: this.backgroundColor}}>
                    <Text style={[styles.subtitle, { color: this.textcolor, fontSize: this.props.scale } ]}>LINKIVE</Text>
                </Icon.Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logobutton: {
        backgroundColor: '#eb3b5a', 
    },
    logowrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold'
    },
})