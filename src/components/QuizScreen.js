import React from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as actionCreators from '../actions/action_creators'
import Button from 'react-native-button'

class QuizScreen extends React.Component {
    state = {
        title: '',
        mode: "question",
        currentQuestionNumber: 1
    }

    componentDidMount = () => {
        this.setState({
            title: this.props.navigation.state.params.title,
        })
    }


    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params

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

    showCompleted = () => {
        console.log("**** QUIZ completed")
        this.setState( {
            mode: "completed"
        })
    }

    correctAnswer = () => {
        let {currentQuestionNumber} = this.state
        let quiz = this.props.quiz
        this.props.correctAnswer()
        if (!quiz.completed && currentQuestionNumber < quiz.totalQuestions) {
            console.log(" this.props.quiz.correctCount + this.props.quiz.incorrectCount " + (this.props.quiz.correctCount + this.props.quiz.incorrectCount) + " quiz.totalQuestions " + quiz.totalQuestions)
            this.showNextQuestion()
        } else {
            this.props.completeQuiz()
            this.showCompleted()
        }
    }

    incorrectAnswer = () => {
        let {currentQuestionNumber} = this.state
        let quiz = this.props.quiz
        this.props.incorrectAnswer()
        if (!quiz.completed && currentQuestionNumber < quiz.totalQuestions) {
            console.log(" this.props.quiz.correctCount + this.props.quiz.incorrectCount " + (this.props.quiz.correctCount + this.props.quiz.incorrectCount) + " quiz.totalQuestions " + quiz.totalQuestions)
            this.showNextQuestion()
        } else {
            this.props.completeQuiz()
            this.showCompleted()
        }
    }

    showNextQuestion = () => {
        let {currentQuestionNumber} = this.state
        let { title, correctCount, incorrectCount, totalQuestions, completed } = this.props.quiz

        if (currentQuestionNumber >= totalQuestions) {
            this.props.completeQuiz()
        }
        else if (completed) {
            this.showCompleted()
        }
        else {
            currentQuestionNumber += 1
            if (currentQuestionNumber <= totalQuestions) {
                this.props.setQuestion({
                    questionNumber: currentQuestionNumber,
                    question: this.props.reducer[title].questions[currentQuestionNumber - 1].question,
                    answer: this.props.reducer[title].questions[currentQuestionNumber - 1].answer,
                })
                this.setState({
                    currentQuestionNumber: currentQuestionNumber
                })
            }
        }
    }

    render() {
        const {question, answer, questionNumber, totalQuestions, correctCount } = this.props.quiz
        const {mode} = this.state

        if (mode == "question") {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.progress}>
                        <Text style={{fontSize: 22}}>{questionNumber + " / "} </Text><Text style={{fontSize: 22}}>{totalQuestions}</Text>
                    </View>
                    <View style={styles.question}>
                      <Text style={{fontSize: 25}}>{question}</Text>
                      <TouchableOpacity onPress={this.showAnswer.bind(this)}>
                          <Text style={{fontSize: 18, paddingTop: 5, color: 'green'}}>Answer</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <Button
                            containerStyle={{padding:10, height:45, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
                            style={{fontSize: 20, color: 'white'}}
                            onPress={this.correctAnswer.bind(this)}>Correct</Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            containerStyle={{padding:10, height:45, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'red'}}
                            style={{fontSize: 20, color: 'white'}}
                            onPress={this.incorrectAnswer.bind(this)}>Incorrect</Button>
                    </View>
                </View>
            )
        }
        else if (mode === "answer" ) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={styles.progress}>
                        <Text style={{fontSize: 22}}>{questionNumber + " / "} </Text><Text style={{fontSize: 22}}>{totalQuestions}</Text>
                    </View>
                    <View style={styles.question}>
                      <Text style={{fontSize: 25}}>{answer}</Text>
                      <TouchableOpacity onPress={this.showQuestion.bind(this)}>
                         <Text style={{fontSize: 18, paddingTop: 5, color: 'green'}}>Question</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <Button
                            containerStyle={{padding:10, height:45, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
                            style={{fontSize: 20, color: 'white'}}
                            onPress={this.correctAnswer.bind(this)}>Correct</Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            containerStyle={{padding:10, height:45, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'red'}}
                            style={{fontSize: 20, color: 'white'}}
                            onPress={this.incorrectAnswer.bind(this)}>Incorrect</Button>
                    </View>
                </View>
            )
        }
        else if ( mode == "completed" ) {
            return (
                <View style={styles.completed}>
                    <Text style={{fontSize: 22}}>Quiz Completed. Good Job.</Text>
                    <Text style={{fontSize: 20, paddingTop: 10, color: 'blue'}}>Score: { (correctCount / totalQuestions) * 100.0}% ( {correctCount} of {totalQuestions} correct )</Text>
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
        alignContent: 'flex-start',
        backgroundColor: "#ffffff",
        margin: 10,
        padding: 5
    },
    question: {
        flex: 1,
        height: 50,
        width: 300,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 20,
        height: 30,
        width: 300
    },
    completed: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        height: 200,
        paddingLeft: 30
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
        setQuestion: (data) => dispatch(actionCreators.setQuestion(data)),
        correctAnswer: (data) => dispatch(actionCreators.correctAnswer(data)),
        incorrectAnswer: (data) => dispatch(actionCreators.incorrectAnswer(data)),
        completeQuiz: (data) => dispatch(actionCreators.completeQuiz(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen)