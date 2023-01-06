import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Drink = props => {
    return (
        <TouchableHighlight style={styles.listItem} onPress={() => props.onSelectDrink(props.id)}>
            <View>
                <Text>{props.title}</Text>
                <Text>{props.rttpg_excerpt}</Text>
            </View>
        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    listItem: {
        flexBasis: '46%',
        padding: 10,
        width: 140,
        height: 140,
        marginVertical: 5,
        backgroundColor: '#458695',
    }
});
export default Drink;