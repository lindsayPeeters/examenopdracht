import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Drink = props => {
    return (
        <TouchableHighlight>
            <View>
                <Text>{props.title}</Text>
            </View>
        </TouchableHighlight>
    )
}
export default Drink;