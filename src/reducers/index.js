import { combineReducers } from 'redux'
import * as action_types  from '../actions/types'

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
    console.log("quiz reducer called state: " + JSON.stringify(state))
    switch  (action.type) {
        case action_types.START_QUIZ:
            console.log("START_QUIZ called with action: " + JSON.stringify(action))
            let retVal = {
                [action.title]: {
                    question: action.question,
                    answer: action.answer,
                    questionNumber: action.questionNumber,
                    totalQuestions: action.totalQuestions,
                    correctCount: 0,
                    incorrectCount: 0
                }
            }
            console.log("START_QUIZ returning state: " + JSON.stringify(retVal))
            return retVal

        case action_types.CORRECT_ANSWER:
            console.log("CORRECT_ANSWER quiz state: " + JSON.stringify(state) + "  action: " + JSON.stringify(action) )
            return {...state,
                [action.title]: {...state[action.title],
                                 correctCount:  state[action.title].correctCount + 1
                   }
            }

        case action_types.INCORRECT_ANSWER:
            console.log("INCORRECT_ANSWER quiz state: " + JSON.stringify(state) + "  action: " + JSON.stringify(action) )
            return {...state,
                [action.title]: {...state[action.title],
                                 incorrectCount: state[action.title].incorrectCount + 1
                }
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

