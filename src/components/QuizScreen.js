import React from 'react';
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as actionCreators from '../actions/action_creators'

class QuizScreen extends React.Component {
    state = {
        title: '',
        mode: "question",
        currentQuestionNumber: 0
    }

    componentDidMount = () => {
        console.log("QuizScreen component did mount called with title " + JSON.stringify(this.props.navigation.state.params.title))
        console.log("this.props.reducer: " + JSON.stringify(this.props.reducer))
        this.setState( {
            title: this.props.navigation.state.params.title,
        })
    }


    static navigationOptions = ({navigation}) =>  {
        const { title } = navigation.state.params

        return {
            title: "Quiz"
        }
    }

    showAnswer = () => {
        this.setState({
            mode: "answer"
        })
    }

    showQuestion = () => {
        this.setState({
            mode: "question"
        })
    }

    correctAnswer = () =>  {
        console.log("CORRECT answer clicked")
        let { currentQuestionNumber } = this.state
        let title = this.props.quiz.title
        this.props.correctAnswer({ question: this.props.quiz.question })
        if (currentQuestionNumber < this.props.quiz.totalQuestions ){
            this.setState({
                currentQuestionNumber: currentQuestionNumber + 1
            })
            this.props.setQuizQuestion( {
                question: this.props.reducer[title].questions[currentQuestionNumber].question,
                answer: this.props.reducer[title].questions[currentQuestionNumber].answer,
                questionNumber: currentQuestionNumber
            })
        }

    }

    incorrectAnswer = () => {
        console.log("incorrectAnswer clicked")
        this.props.incorrectAnswer({ question: this.props.quiz.question })
    }

    render() {
        const { question, answer } = this.props.quiz
        const { mode } = this.state

        if (mode == "question") {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 25}}>{question}</Text>
                    <TouchableOpacity onPress={this.showAnswer.bind(this)}>
                      <Text style={{fontSize: 18, paddingTop: 5}}>Answer</Text>
                    </TouchableOpacity>

                    <View style={styles.button}>
                        <Button title="Correct" onPress={this.correctAnswer.bind(this)}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="Incorrect" onPress={this.incorrectAnswer.bind(this)}></Button>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: 25}}>{answer}</Text>
                  <TouchableOpacity onPress={this.showQuestion.bind(this)}>
                    <Text style={{fontSize: 18, paddingTop: 5}}>Question</Text>
                  </TouchableOpacity>

                  <View style={styles.button}>
                      <Button title="Correct" onPress={this.correctAnswer.bind(this)}></Button>
                  </View>
                  <View style={styles.button}>
                      <Button title="Incorrect" onPress={this.incorrectAnswer.bind(this)}></Button>
                  </View>
                </View>
            )
        }
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
    question: {
        flex: 1,
        flexDirection: 'row'
        alignItems: 'center',
        justifyContent: 'center'
    },
})

function mapStateToProps( state ) {
    console.log("quizScreen state: " + JSON.stringify(state))
    return {
        reducer: state.reducer,
        quiz: state.quiz
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setQuizQuestion: (data) => dispatch(actionCreators.setQuizQuestion(data)),
        correctAnswer: (data) => dispatch(actionCreators.correctAnswer(data)),
        incorrectAnswer: (data) => dispatch(actionCreators.incorrectAnswer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen)