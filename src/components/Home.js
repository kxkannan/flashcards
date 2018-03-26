import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { connect } from 'react-redux'
import DeckTitle  from './DeckTitle'

class HomeScreen extends React.Component {
    state = {
        titles: []
    }

    componentDidMount = () => {
        this.setState({
            titles: Object.keys(this.props.reducer)
        })
    }

    render() {
        let titles  = this.state.titles
        const { refresh } = this.props.navigation.state
        console.log(" titles from state: " + JSON.stringify(titles))
        console.log("refresh: " + refresh)

        if (titles.length > 0) {
          return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ScrollView>
                    {titles.map((title) => <DeckTitle key={title} title={title} cardCount={1} navigation={this.props.navigation}/> ) }
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
    return { }
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