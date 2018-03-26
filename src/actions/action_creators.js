import * as action_types from './types'

export function addDeckTitle( { title }) {
    return {
        type: action_types.ADD_TITLE,
        title
    }

}
