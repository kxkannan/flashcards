import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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

export default HomeScreen