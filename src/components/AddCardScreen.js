import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native';
import * as actionCreators from '../actions/action_creators'
import Button from 'react-native-button'

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
        let currentDeckTitle = this.props.reducer.reducer.currentDeckTitle
        if ( this.state.question != "Question" && this.state.answer != "Answer") {
           this.props.addQuestion({
               title: this.props.navigation.state.params.title,
               question: this.state.question,
               answer: this.state.answer
           })
           this.props.navigation.goBack()
       }
    }


    render() {
        const { question, answer } = this.state

        return (
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

                <TextInput placeholder={question} style={styles.input} onChangeText={(text) => this.setState({question: text})}/>

                <TextInput placeholder={answer} style={styles.input} onChangeText={(text) => this.setState({answer: text})}/>

                <KeyboardAvoidingView behavior="padding" style={styles.button}>
                    <Button
                        containerStyle={{padding: 10, height: 50, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'green' }}
                        style={{fontSize: 20, color: 'white'}}
                        disabled={(this.state.question === "Question" || this.state.answer === "Answer")}
                        onPress={this.newCardSubmit}>Submit</Button>
                </KeyboardAvoidingView>
            </KeyboardAvoidingView>
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
    },
    input: {
        width: 200,
        height: 44,
        padding: 4,
        borderWidth: 1,
        borderColor: `#757575`,
        margin: 20
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