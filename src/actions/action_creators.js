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

export function setQuizQuestion( { title, question, answer, questionNumber, totalQuestions }) {
    return {
        type: action_types.START_QUIZ,
        title,
        question,
        answer,
        questionNumber,
        totalQuestions
    }
}

export function correctAnswer( { title, question }) {
    return {
        type: action_types.CORRECT_ANSWER,
        title,
        question
    }
}

export function incorrectAnswer( { title, question }) {
    return {
        type: action_types.INCORRECT_ANSWER,
        title,
        question
    }
}
