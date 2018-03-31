import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { connect } from 'react-redux'
import DeckTitle  from './DeckTitle'
import * as actionCreators from '../actions/action_creators'
import {Notifications, Permissions} from "expo";

class HomeScreen extends React.Component {
    state = {
        titles: []
    }

    static navigationOptions = ({navigation}) =>  {
        return {
            title: "Quiz decks"
        }
    }

    componentDidMount = () => {
        this.setState({
            titles: Object.keys(this.props.reducer)
        })
        this.setLocalNotification()
    }

    resetStore = () => {
        this.props.resetStore()
    }

    deckCardCount = (title, event) => {
        if (Object.keys(this.props.reducer.decks).length > 0 && this.props.reducer.decks[title]) {
             return this.props.reducer.decks[title].questions.length
        }
        else
        {
            return 0
        }
    }

    createNotification = () => {
        return {
            title: 'Practice your quizes on Flashcards',
            body: "Practice makes it perfect - use Flashcards today to improve your skills",
            ios: {
                sound: true,
            }
        }
    }

    setLocalNotification = () => {
        let notifications = this.props.reducer.notifications
        if (!notifications || notifications === false) {
            Permissions.askAsync(Permissions.NOTIFICATIONS).
            then(({status}) => {
                if (status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()
                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(8)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync(
                        this.createNotification(), {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    )
                    this.props.setNotification()
                }
            })
        }
    }

    render() {
        let titles  = this.state.titles
        if (Object.keys(this.props.reducer).length > 0){
            titles = Object.keys(this.props.reducer.decks)
        }

        let cardCount = 0
        if (titles.length > 0) {
          return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView>
                    {titles.map((title) => <DeckTitle key={title} title={title} cardCount={this.props.reducer.decks[title].questions.length || 0} navigation={this.props.navigation}/> ) }
                    <Button title="reset" onPress={this.resetStore} />
                </ScrollView>
            </View>
          )
        }
        else {
          return <Text>No Decks</Text>
        }
    }
}

function mapStateToProps({ reducer }) {
    return { reducer }
}
function mapDispatchToProps(dispatch) {
    return {
        resetStore: () => dispatch(actionCreators.resetStore()),
        setNotification: (data) => dispatch(actionCreators.setNotification(data)),
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)