import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/action_creators'

class NewDeckScreen extends React.Component {
    state = {
        input: 'Deck title'
    }

    handleSubmit = (event) => {
        console.log("handleSubmit saving title: " + this.state.input)
        this.props.addTitle({title: this.state.input})
        console.log("navigating to Home")
        this.props.navigation.navigate("Home", {refresh: true})
    }


    render() {
        const { input } = this.state
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>What is the Title of your new Deck?</Text>
                <TextInput value={input} style={styles.input} onChangeText={(text) => this.setState({input: text})}/>
                <Button onPress={this.handleSubmit} title="Submit" />
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