import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Logo from './Base/Logo'
import Colors from '../Colors.js'

export default class Splash extends Component {
    
    render () {
        return (
            <View style={styles.wrapper}>
                <Logo 
                    scale={50}
                    marginBottom={0}
                    backgroundColor={Colors.main} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.main, 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})