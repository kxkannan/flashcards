import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {saveDeckTitle} from "../utils/api";

class NewDeckScreen extends React.Component {
    state = {
        input: 'Deck title'
    }

    handleSubmit = (event) => {
        console.log("title of deck: " + JSON.stringify(this.state.input))
        saveDeckTitle(this.state.input)
    }


    render() {
        const { input } = this.state
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>What is the Title of your new Deck?</Text>
                <TextInput value={input} style={styles.input} onChangeText={(text) => this.setState({input: text})}/>
                <Button onPress={this.handleSubmit} title="Submit" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: `#757575`,
        margin: 50
    }
})

export default NewDeckScreen