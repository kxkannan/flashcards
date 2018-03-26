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
                         title: title
                   }
                   }
        default:
            console.log(" default case for reducer " + JSON.stringify(state))
            return state
    }
}

export default combineReducers({
    reducer
})

