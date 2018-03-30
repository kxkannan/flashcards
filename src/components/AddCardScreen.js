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
       this.props.addQuestion( {title: this.props.navigation.state.params.title, question: this.state.question, answer: this.state.answer} )
       this.props.navigation.goBack(this.props.navigation.state.params.go_back_key)
    }


    render() {
        // const { title, cardCount } = this.props.navigation.state.params
        const { question, answer } = this.state

        return (
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

                <TextInput placeholder={question} style={styles.input} onChangeText={(text) => this.setState({question: text})}/>

                <TextInput placeholder={answer} style={styles.input} onChangeText={(text) => this.setState({answer: text})}/>

                <KeyboardAvoidingView behavior="padding" style={styles.button}>
                    <Button
                        containerStyle={{padding:10, height:45, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
                        style={{fontSize: 20, color: 'white'}}
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
        margin: 10,
        padding: 5
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