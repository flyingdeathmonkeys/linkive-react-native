// react and plugins
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Entypo';

// Components
import DrawerContainer from './DrawerContainer'

// Settings
import Colors from '../Colors'

// Screens
import Home from './Screens/Home'
import Search from './Screens/Search'

const styles = StyleSheet.create({
    menuButton: {
        color: '#FFF'
    },
    menuIconWrapper: {
        paddingLeft: 10
    },
    actionIconWrapper: {
        paddingRight: 20
    }
})

const DrawerStack = DrawerNavigator({
	home: { screen: Home },
    search: { screen: Search }
},
{
    contentComponent: DrawerContainer
})

const TitleComponent = (
    <Icon 
        name="link"
        size={25}
        style={styles.menuButton} />
)

function createActionIconComponent (navigation) {
    return (
        <View style={styles.actionIconWrapper}>
            <Icon 
                name="plus"
                size={25}
                style={styles.menuButton}
                onPress={() => navigation.navigate('AddLink')} />
        </View>   
    )
}

function createMenuIconComponent (navigation) {
    return (
        <View style={styles.menuIconWrapper}>
            <Icon 
                name="menu"
                size={35}
                style={styles.menuButton}
                onPress={() => navigation.navigate('DrawerToggle')} />
        </View>   
    )
}

const DrawerNavigation = StackNavigator({
	DrawerStack: { 
        screen: DrawerStack
    }
}, {
	headerMode: 'float',
	navigationOptions: ({navigation}) => ({
	    headerStyle: { 
            backgroundColor: Colors.main, 
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 1
        },
	    headerTitle: TitleComponent,
        headerLeft: createMenuIconComponent(navigation),
        headerRight: createActionIconComponent(navigation),
        gesturesEnabled: false,
    })
})

export default DrawerNavigation