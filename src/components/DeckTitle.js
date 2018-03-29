import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

class DeckTitle extends React.Component {

    selectDeck = (title, cardCount, navigation, event) => {
        navigation.navigate("Deck", {title: title, cardCount: cardCount})
    }

    render() {
        const { title, cardCount, navigation } = this.props

        return (
            <View style={{flex: 1, flexWrap: 'wrap', padding: 5, marginTop: 5}}>
                <TouchableOpacity onPress={this.selectDeck.bind(this, title, cardCount, navigation)}>
                  <Text style={{fontSize: 20}}>{title}</Text>
                  <Text style={{textAlign: 'center'}}>{cardCount} cards</Text>
                </TouchableOpacity>
            </View>

        )

    }

}

export default DeckTitle