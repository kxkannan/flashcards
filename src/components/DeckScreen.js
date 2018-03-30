import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux'
import * as actionCreators from "../actions/action_creators";
import Button from 'react-native-button'

class DeckScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params

        return {
            title: title
        }
    }

    addCard = (title, event) => {
        this.props.navigation.navigate("AddCard", {title: title, go_back_key: this.props.navigation.state.key})
    }

    startQuiz = (title, event) => {
        this.props.navigation.navigate("Quiz", {title: title, go_back_key: this.props.navigation.state.key})
        let questions = this.props.reducer[title].questions[0]
        this.props.setQuizQuestion({
            title: title,
            question: questions.question,
            answer: questions.answer,
            questionNumber: 1,
            totalQuestions: this.props.reducer[title].questions.length
        })
    }


    render() {
        const {title, cardCount} = this.props.navigation.state.params

        return (
            <View style={styles.container}>
                <View style={styles.question}>
                  <Text style={{fontSize: 20}}>{title}</Text>
                  <Text>{cardCount} cards</Text>
                </View>
                <View style={styles.buttons}>
                    <View >
                        <Button
                            containerStyle={{padding:10, height:45, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                            style={{ fontSize: 20, color: 'black' }}
                            onPress={this.addCard.bind(this, title)}>Add Card</Button>
                    </View>
                    <View >
                        <Button
                            containerStyle={{padding:10, height:45, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
                            style={{fontSize: 20, color: 'white'}}
                            onPress={this.startQuiz.bind(this, title)}>Start Quiz
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    addButton: {
        flexDirection: 'row',
        height: 50,
        width: 150,
        alignContent: 'center',
        backgroundColor: "white",
        margin: 10,
        padding: 5
    },
    quizButton: {
        flexDirection: 'row',
        height: 50,
        width: 150,
        alignContent: 'center',
        backgroundColor: "darkgreen",
        margin: 10,
        padding: 5
    },
    question: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
    },
    buttons: {
       alignItems: 'center',
       justifyContent: 'center',
       height: 600
    }

})

function mapStateToProps(state) {
    return {
        reducer: state.reducer,
        quiz: state.quiz
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setQuizQuestion: (data) => dispatch(actionCreators.setQuizQuestion(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreen)