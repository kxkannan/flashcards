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

export function correctAnswer() {
    return {
        type: action_types.CORRECT_ANSWER,
    }
}

export function incorrectAnswer() {
    return {
        type: action_types.INCORRECT_ANSWER,
    }
}

export function setQuestion( { questionNumber, question, answer}) {
    return {
        type: action_types.SET_QUESTION,
        questionNumber,
        question,
        answer
    }
}

export function completeQuiz() {
    return {
        type: action_types.COMPLETE_QUIZ
    }
}
