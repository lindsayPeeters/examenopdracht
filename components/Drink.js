import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Drink = props => {
    return (
        <TouchableHighlight onPress={() => props.OnSelectDrink(props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#458695',
    }
});
export default Drink;