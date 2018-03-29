import React from 'react';
import { connect } from 'react-redux'
import { Button, StyleSheet, TextInput, View } from 'react-native';
import * as actionCreators from '../actions/action_creators'

class AddCardScreen extends React.Component {

    state = {
        question: 'Question',
        answer: 'Answer'
    }


    static navigationOptions = ({navigation}) =>  {
        const { title } = navigation.state.params

        return {
            title: "Add Card"
        }
    }

    newCardSubmit = () => {
       console.log("new card submitted question: " + this.state.question + " answer: " + this.state.answer + " title: " + this.props.navigation.state.params.title)
       this.props.addQuestion( {title: this.props.navigation.state.params.title, question: this.state.question, answer: this.state.answer} )
       this.props.navigation.goBack(this.props.navigation.state.params.go_back_key)
    }


    render() {
        // const { title, cardCount } = this.props.navigation.state.params
        const { question, answer } = this.state

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <TextInput placeholder={question} style={styles.input} onChangeText={(text) => this.setState({question: text})}/>

                <TextInput placeholder={answer} style={styles.input} onChangeText={(text) => this.setState({answer: text})}/>

                <View style={styles.button}>
                    <Button title="Submit" onPress={this.newCardSubmit}></Button>
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
    },
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: `#757575`,
        margin: 50
    }
})

function mapStateToProps( reducer ) {
   return { reducer }
}

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: (data) => dispatch(actionCreators.addQuestion(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardScreen)