import React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Button, StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./Home"
import DeckScreen from "./DeckScreen"
import NewDeckScreen from "./NewDeckScreen"
import AddCardScreen from './AddCardScreen'

const Decks = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Deck: {
            screen: DeckScreen
        },
        AddCard: {
            screen: AddCardScreen
        }
    },
    {
        initialRouteName: 'Home'
    }
)

const HomeStack = StackNavigator( {
    Home:    { screen: HomeScreen },
    Deck:    { screen: DeckScreen },
    AddCard: { screen: AddCardScreen }
})

const NewCardStack = StackNavigator( {
    NewDeck: { screen: NewDeckScreen}
})

export default TabNavigator(
    {
        Home: { screen: HomeStack },
        NewDeck: { screen: NewCardStack }
    },
    { navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                let icon;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                    icon = <Ionicons name={iconName} size={25} color={tintColor} />;
                } else if (routeName === 'NewDeck') {
                    iconName = `cards${focused ? '' : '-outline'}`;
                    icon = <MaterialCommunityIcons name={iconName} size={25} color={tintColor}/>
                }
                return icon
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
)