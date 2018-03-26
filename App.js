import React from 'react';

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './src/reducers';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import MainScreen from './src/components/MainScreen'
import HomeScreen from './src/components/Home'
import NewDeckScreen from './src/components/NewDeckScreen'
import DeckScreen from './src/components/DeckScreen'
import LoadingScreen from './src/components/LoadingScreen'

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const appPersistReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(appPersistReducer);
export const persistor = persistStore(store);

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<LoadingScreen/>} persistor={persistor}>
                <MainScreen/>
            </PersistGate>
        </Provider>
    );
}

export default App;





