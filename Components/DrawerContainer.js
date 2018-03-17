import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/Entypo';
 
import Colors from '../Colors'

const menuItems = [
    {
        key: 'home',
        icon: 'home',
        title: 'Home'
    },
    {
        key: 'search',
        icon: 'magnifying-glass',
        title: 'Search'
    },    
]

export default class DrawerContainer extends React.Component {

    state = {
        activeRoute: 'home'
    }

    _navigate = (item) => {
        this.props.navigation.navigate(item.key)
        this.setState({
            activeRoute: item.key
        })
    }

    _isItemActive = (item) => {
        return item.key == this.state.activeRoute
    }

    createMenuItem = (item, key, navigation) => {

        return (
            <TouchableHighlight
                key={key}
                underlayColor='white'
                onPress={() => this._navigate(item)} >
                <View style={this._isItemActive(item) ? styles.activeDrawerItem : styles.drawerItem}>
                    <Icon 
                        name={item.icon}
                        size={25}
                        style={styles.icon} 
                        color={Colors.main} />
                    <Text style={styles.drawerItemText}>{item.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
    
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                { menuItems.map((item, key) => this.createMenuItem(item, key, navigation)) }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.drawer.background,
        paddingTop: 12,
        paddingLeft: 6,
        paddingRight: 0
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: Colors.drawer.border,
        backgroundColor: Colors.drawer.itemColor
    },
    activeDrawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: Colors.drawer.border,
        backgroundColor: Colors.drawer.activeItemColor
    },    
    drawerItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.main,
        padding: 15,
        margin: 5,
        textAlign: 'center'
    }
})