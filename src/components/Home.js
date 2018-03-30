import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { connect } from 'react-redux'
import DeckTitle  from './DeckTitle'
import * as actionCreators from '../actions/action_creators'

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
    }

    resetStore = () => {
        this.props.resetStore()
    }

    deckCardCount = (title, event) => {
        if (Object.keys(this.props.reducer).length > 0 && this.props.reducer[title]) {
             return this.props.reducer[title].questions.length
        }
        else
        {
            return 0
        }
    }

    render() {
        let titles  = this.state.titles
        if (Object.keys(this.props.reducer).length > 0){
            titles = Object.keys(this.props.reducer)
        }

        let cardCount = 0
        if (titles.length > 0) {
          return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView>
                    {titles.map((title) => <DeckTitle key={title} title={title} cardCount={this.props.reducer[title].questions.length || 0} navigation={this.props.navigation}/> ) }
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
    console.log("mapStateToProps reducer: " + JSON.stringify(reducer))
    return { reducer }
}
function mapDispatchToProps(dispatch) {
    return {
        resetStore: () => dispatch(actionCreators.resetStore())
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