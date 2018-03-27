import * as action_types from './types'

export function addDeckTitle( { title }) {
    return {
        type: action_types.ADD_TITLE,
        title
    }
}

export function addQuestion( { title, question, answer }) {
    return {
        type: action_types.ADD_QUESTION,
        title,
        question,
        answer
    }
}

export function resetStore() {
    return {
        type: action_types.RESET_STORE
    }
}
