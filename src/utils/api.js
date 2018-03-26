import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'ReactND-KK:flashcards'

export function getDecks() {
    let decks = {};
    return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
        if (err) {
         decks = {}
        }
        if (result) {
          decks = JSON.parse(result)
          console.log("getDecks() decks: " + JSON.stringify(decks) + "typeof decks " + typeof decks)
          decks
        }
    })
}

export function getDeck(title) {
   let decks = AsyncStorage.getItem(DECKS_STORAGE_KEY)
   console.log("AsyncStorage getDeck for (" + title + "): item: " + JSON.stringify(item))
}

export function saveDeckTitle(title) {
   let decks;
   let updatedDecks;
   AsyncStorage.getItem(DECKS_STORAGE_KEY).then( (value) => {
       decks = JSON.parse(value)
       if (decks === undefined || decks === null) {
           decks = {
               [title]: {
                   "title": title
               }
           }
       }
       else {
         decks[title] = {
                     "title": title
         }
       }
       AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
   })
     // AsyncStorage.getAllKeys().then( (key) => key.forEach((key) => console.log("key in asyncStorage " + key)))
     // AsyncStorage.getAllKeys().then( (key) => key.forEach((key) => AsyncStorage.getItem(key).then((value) => console.log("value: " + value))))
}

export function generateId() {
    let id = ""
    let possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let i=0; i < 22; i++)
        id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));

    return id;
}

export function clear() {
    AsyncStorage.removeItem(DECKS_STORAGE_KEY)
}

