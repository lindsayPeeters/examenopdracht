import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import DetailDrink from '../components/DetailDrink';

const DetailScreen = ({route, navigation}) =>{
    const drinkId = route.params.drinkId;
    //console.log(drinkId);
    //console.log(route);
    return(
        <View style={styles.container}>
            <DetailDrink id={drinkId}/>
            <TouchableHighlight style={styles.button} onPress={() => props.onSelectDrink(props.id)}>
                <Text style={styles.text}>+</Text>
            </TouchableHighlight>
        </View> 
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        padding: 20,
    },
    button:{
        backgroundColor: '#458695', 
        width: 50,   
        height: 50,
        borderRadius: 360,
        marginLeft: '80%',
    },
    text: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'thin',
        textAlign: 'center',
        padding: 10,
        paddingTop: '3%',
    }
});
export default DetailScreen;