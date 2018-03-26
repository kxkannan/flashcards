import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class DeckScreen extends React.Component {
    static navigationOptions = ({navigation}) =>  {
        const { title } = navigation.state.params

        return {
            title: title
        }
    }

    addCard = () => {
        console.log("addCard pressed")
    }

    startQuiz = () => {
        console.log("start quiz pressed")
    }


    render() {
        const { title, cardCount } = this.props.navigation.state.params

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>{title}</Text>
                <Text style={{textAlign: 'center'}}>{cardCount} cards</Text>

                <View style={styles.button}>
                  <Button title="Add Card" onPress={this.addCard}></Button>
                </View>
                <View style={styles.button}>
                  <Button title="Start Quiz" onPress={this.startQuiz}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        height: 50,
        width: 150,
        alignContent: 'center',
        backgroundColor: "#ffffff",
        margin: 10,
        padding: 5
    }
})

export default DeckScreen