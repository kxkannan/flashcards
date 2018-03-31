



This is my React-native project for Udacity Nano Degree.

This was tested only on iOS simulator and Apple iPhone 7 Plus. Please use iOS environment to run the app.


#### `Environment and setup`

To install react and other packages required by the app, run 

```
yarn install
```

You need to have [Expo app](https://expo.io) or Expo command line (exp) installed on your machine to run the app.

To start the app, run 

```
yarn start
```

This will bring up the QR code, the app URL and some instructions to run the iOS simulator.

You can either open the app in the iOS simulator or test it on the physical mobile device by sending a text message to it.

```
exp start --send-to <phone number>
```

On the mobile device, you need to have the [Expo app](https://expo.io) installed. When you click on the text message, it will open this app and connect to your server.

#### `Application usage`

The app will open up with 2 tabs ( Quiz decks  and New quiz deck) and the main screen will show "No Decks".

Click on the "New quiz deck" tab and start entering the title for the new deck and submit.

This will transition to the main screen and will show the deck title.

##### `Adding quiz cards`

On the Main screen, click on the deck name to add the quiz cards. 

This will transition to the deck screen.  Here you will have the option to Add a quiz card or start the quiz.  The quiz will not start if there are no cards.

Click on Add Card to enter the quiz question and answer. The Submit button is disabled until both the question and answer are entered.

Once you click submit, it will take you to the main quiz decks screen showing the card count for the deck.

#### `Start quiz`

To start the quiz, click on the deck you wish to play.

The quiz screen will show you the current question number and the total questions in this deck.

You can see the question, click the "Answer" button to see the answer.

You can click Correct or Incorrect button to move through the cards. 

Once you reach the final card of the deck, pressing the Correct or Incorrect button will show you the score for the quiz.

Every time you press the Start quiz, the scores will reset.


