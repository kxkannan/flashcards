import { combineReducers } from 'redux'
import * as action_types  from '../actions/types'
import {COMPLETE_QUIZ} from "../actions/types";

const initialState = {
    decks: {
        "React questions": {
            title: "React questions", questions: [{question: "Does React work with Redux?", answer: "Yes"},
                {question: "Does react works in mobile?", answer: "Yes"}
            ]

        },
        "Javascript questions": {
            title: "Javascript questions", questions: [{question: "Does Javascript support classes?", answer: "Yes"},
                {question: "Does Javascript support operator overloading?", answer: "No"}]
        }
    },
    currentDeckTitle: null
  }

export const reducer = (state = initialState, action) => {
    let title = action.title
    switch (action.type) {
        case action_types.ADD_TITLE:
            return {...state,
                    decks: {...state.decks,
                                 [title]: {...state.questions[title],
                                           title: title,
                                           questions: [] }
                               },
                   }

        case action_types.ADD_QUESTION:
            return {
                ...state,
                decks: {
                    ...state.decks,
                    [title]: {
                        ...state.decks[title],
                        title: title,
                        questions: state.decks[title].questions.concat([{
                            question: action.question,
                            answer: action.answer
                        }])
                    }
                }
            }
        case action_types.RESET_STORE:
            return initialState

        case action_types.CURRENT_DECK_TITLE:
            return {...state,
                    currentDeckTitle: action.title}

        default:
            return state
    }
}

let quizInitialState = {}

export const quiz = (state = quizInitialState, action) => {
    switch  (action.type) {
        case action_types.START_QUIZ:
            return {
                    title: action.title,
                    questions: action.questions,
                    question: action.question,
                    answer: action.answer,
                    questionNumber: 1,
                    totalQuestions: action.totalQuestions,
                    correctCount: 0,
                    incorrectCount: 0,
                    completed: false,
                    goBackKey: null
            }

        case action_types.SET_QUESTION:
            return {...state,
                    questionNumber: action.questionNumber,
                    question: action.question,
                    answer: action.answer
            }

        case action_types.CORRECT_ANSWER:
            return {...state,
                    correctCount:  state.correctCount + 1
                   }

        case action_types.INCORRECT_ANSWER:
            return {...state,
                    incorrectCount: state.incorrectCount + 1
                   }

        case action_types.COMPLETE_QUIZ:
            return {...state,
                    completed: true
                   }

        case action_types.SET_GO_BACK_KEY:
            return {...state,
                goBackKey: action.goBackKey }

        case action_types.RESET_STORE:
            return quizInitialState

        default:
            return state
    }
}

export default combineReducers({
    reducer,
    quiz
})

