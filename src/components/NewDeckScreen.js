import React from 'react';
import {  StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/action_creators'
import Button from 'react-native-button'

class NewDeckScreen extends React.Component {
    state = {
        input: 'Deck title'
    }

    static navigationOptions = ({navigation}) =>  {
        return {
            title: "New quiz deck"
        }
    }


    handleSubmit = (event) => {
        this.props.addTitle({title: this.state.input})
        this.setState({input: 'Deck title'})
        this.props.navigation.navigate("Home", {refresh: true})
    }


    render() {
        const { input } = this.state
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 22}}>What is the Title of your new Deck?</Text>
                <TextInput placeholder={input} style={styles.input} onChangeText={(text) => this.setState({input: text})}/>
                <Button
                    containerStyle={{padding:10, height:45, width: 150, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
                    style={{fontSize: 20, color: 'white'}}
                    onPress={this.handleSubmit}>Submit</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: `#757575`,
        margin: 50
    }
})

function mapStateToProps({reducer}) {
    return {
        reducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTitle: (data) => dispatch(actionCreators.addDeckTitle(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckScreen)