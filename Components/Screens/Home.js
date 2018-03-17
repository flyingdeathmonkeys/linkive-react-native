import Expo from 'expo';
import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableHighlight, ListView, } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { List, ListItem, Card } from 'react-native-elements'

export default class Home extends React.Component {   

    state = {
        recentLinks: []
    }

    constructor (props) {
        super(props);
    
        this.linkstorage = props.screenProps.linkstorage
    }
    
    renderRow = (rowData, sectionID) => {
        return (
            <ListItem
                key={sectionID}
                title={rowData.title}
                icon={{ name: rowData.icon }} />
        );
    }

    componentDidMount () {
        const links = this.linkstorage.getRecentLinks(5)
        this.setState({recentLinks: links})
    }

    render () {

        const dateOptions = {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }

        return (
            <ScrollView>
                <View style={styles.wrapper}>
                    <Card
                        title="RECENTLY ADDED"
                        dividerStyle={{paddingBottom: 0, marginBottom: 0}}>
                        {
                            this.state.recentLinks.map((item, key) => {
                                return (
                                    <View key={key} style={ key === this.state.recentLinks.length - 1 ? styles.itemWithoutBorder : styles.itemWithBorder}>
                                        <Image
                                            style={styles.image}
                                            resizeMode="cover"
                                            source={{ uri: item.avatar }} />
                                        <Text numberOfLines={1} style={styles.name}>{item.title}</Text>
                                        <Text numberOfLines={1} style={styles.subtitle}>added {item.added.toLocaleDateString("de-DE", dateOptions)}</Text>
                                    </View>
                                );
                            })
                        }
                    </Card>
                </View>
            </ScrollView>
        )
    }   
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 0
    },

    itemWithBorder: {
        height: 50,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#EEE',
        justifyContent: 'center'
    },
    itemWithoutBorder: {
        height: 50,
        borderColor: '#EEE',
        justifyContent: 'center'
    },
    name: {
        fontSize: 18,
        //fontFamily: 'Helvetica-Light',
        fontWeight: '600',
        color: '#444'
    },
    subtitle: {
        color: '#AAA'
    }
})