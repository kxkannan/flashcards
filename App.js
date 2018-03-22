import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Decks List</Text>
                <Button title="Go to Deck View" onPress={() => this.props.navigation.navigate('Deck')}/>
            </View>
        )
    }
}

class DeckView extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Deck View</Text>
            </View>
        )
    }
}

class NewDeckScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>Add New Deck</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Decks = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Deck: {
            screen: DeckView
        }
    },
    {
        initialRouteName: 'Home'
    }
)

const HomeStack = StackNavigator( {
    Home: {screen: HomeScreen},
    Deck: {screen: DeckView}
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


