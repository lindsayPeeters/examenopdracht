import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const FavoriteDrink = props => {
    return (
            <View style={styles.listItem}>
                <Text style={styles.drinkName}>{props.title}</Text>       
            </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        marginVertical: 5,
        padding: 10,
        width: '100%',
        height: 140,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    drinkName:{
        fontSize: 18,
        margin: 5,
    }
})
export default FavoriteDrink;