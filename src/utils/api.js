import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'ReactND-KK:flashcards'

export function getDecks() {
    let allKeys = AsyncStorage.getAllKeys()
    console.log("AsyncStorage getDecks called - all_keys " + JSON.stringify(allKeys))
    return allKeys;
}

export function getDeck(title) {
   let decks = AsyncStorage.getItem(DECKS_STORAGE_KEY)
   console.log("AsyncStorage getDeck for (" + title + "): item: " + JSON.stringify(item))
}

export function saveDeckTitle(title) {
   let decks;
   AsyncStorage.getItem(DECKS_STORAGE_KEY).then( (value) => {
       decks = value
       // let deckTitle = {
       //     [title]: {
       //         "title": title
       //     }
       // }
       decks[title] = {
           [title]: {
               "title": title
           }
       }
       AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
   })
    // AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(deckTitle))

    AsyncStorage.getAllKeys().then( (key) => key.forEach((key) => console.log("key in asyncStorage " + key)))
    AsyncStorage.getAllKeys().then( (key) => key.forEach((key) => AsyncStorage.getItem(key).then((value) => console.log("value: " + value))))
}

export function generateId() {
    let id = ""
    let possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i=0; i < 22; i++)
        id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));

    return id;
}

