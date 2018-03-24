import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getDecks } from "../utils/api";

class HomeScreen extends React.Component {
    state = {
        titles: []
    }

    componentDidMount = () => {
        console.log("componentDidMount called")
        getDecks().then((decks) => {
            console.log("getDecks resolved: " + JSON.stringify(JSON.parse(decks)))
            let deckTitles = Object.keys(JSON.parse(decks))
            this.setState({
                titles: deckTitles
            })
        })
    }

    render() {
        const { titles } = this.state
        console.log(" titles from state: " + JSON.stringify(titles))
        if (titles.length > 0) {
          return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {titles.map((title) => {
                console.log("creating text from title: " + title)
                return (<Text key={title}>{title}</Text>)
               }
            )}
          </View>)
        }
        else {
          return <Text>No Decks</Text>
        }
    }
}

export default HomeScreen