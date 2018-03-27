import { combineReducers } from 'redux'
import * as action_types  from '../actions/types'

const initialState = {  }

export const reducer = (state = initialState, action) => {
    console.log("reducer called with state: " + JSON.stringify(state) + " action: " + JSON.stringify(action))
    let title = action.title
    switch (action.type) {
        case action_types.ADD_TITLE:
            console.log("ADD_TITLE called with action: " + JSON.stringify(action))
            return {...state,
                    [title]: {
                         title: title,
                         questions: []
                    }
                   }
        case action_types.ADD_QUESTION:
            console.log("ADD_QUESTION called with action: " + JSON.stringify(action))
            return {...state,
                   [title]: {
                       title: title,
                       questions: state[title].questions.concat([{
                                                        question: action.question,
                                                        answer: action.answer
                                                    }])
                   }}
        case action_types.RESET_STORE:
            console.log("RESET redux store called")
            return initialState
        default:
            console.log(" default case for reducer " + JSON.stringify(state))
            return state
    }
}

export default combineReducers({
    reducer
})

