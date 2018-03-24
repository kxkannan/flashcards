import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import HomeScreen from './src/components/Home'
import NewDeckScreen from './src/components/NewDeckScreen'
import DeckScreen from './src/components/DeckScreen'


const Decks = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Deck: {
            screen: DeckScreen
        }
    },
    {
        initialRouteName: 'Home'
    }
)

const HomeStack = StackNavigator( {
    Home: { screen: HomeScreen },
    Deck: { screen: DeckScreen }
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


