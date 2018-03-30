import { combineReducers } from 'redux'
import * as action_types  from '../actions/types'
import {COMPLETE_QUIZ} from "../actions/types";

const initialState = {  }

export const reducer = (state = initialState, action) => {
    let title = action.title
    switch (action.type) {
        case action_types.ADD_TITLE:
            return {...state,
                    [title]: {
                         title: title,
                         questions: []
                    }
                   }
        case action_types.ADD_QUESTION:
            return {...state,
                   [title]: {
                       title: title,
                       questions: state[title].questions.concat([{
                                                        question: action.question,
                                                        answer: action.answer
                                                    }])
                   }}
        case action_types.RESET_STORE:
            return initialState
        default:
            return state
    }
}

export const quiz = (state = initialState, action) => {
    console.log("quiz reducer called state: " + JSON.stringify(state) + "  action: " + JSON.stringify(action))
    switch  (action.type) {
        case action_types.START_QUIZ:
            console.log("START_QUIZ called with action: " + JSON.stringify(action))
            return {
                    title: action.title,
                    questions: action.questions,
                    question: action.question,
                    answer: action.answer,
                    questionNumber: 1,
                    totalQuestions: action.totalQuestions,
                    correctCount: 0,
                    incorrectCount: 0,
                    completed: false
            }

        case action_types.SET_QUESTION:
            return {...state,
                    questionNumber: action.questionNumber,
                    question: action.question,
                    answer: action.answer
            }

        case action_types.CORRECT_ANSWER:
            console.log("CORRECT_ANSWER quiz state: " + JSON.stringify(state) + "  action: " + JSON.stringify(action) )
            return {...state,
                    correctCount:  state.correctCount + 1
                   }

        case action_types.INCORRECT_ANSWER:
            console.log("INCORRECT_ANSWER quiz state: " + JSON.stringify(state) + "  action: " + JSON.stringify(action) )
            return {...state,
                    incorrectCount: state.incorrectCount + 1
                   }

        case action_types.COMPLETE_QUIZ:
            return {...state,
                    completed: true
                   }

        case action_types.RESET_STORE:
            return initialState

        default:
            return state
    }
}

export default combineReducers({
    reducer,
    quiz
})

