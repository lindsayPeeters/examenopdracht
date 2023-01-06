import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';

import DetailDrink from '../components/DetailDrink';

const DetailScreen = ({route, navigation}) =>{
    const drinkId = route.params.drinkId;
    //console.log(drinkId);
    //console.log(route);
    return(
        <View style={styles.container}>
            <DetailDrink id={drinkId}/>
        </View> 
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        margin: 20,
    }
});
export default DetailScreen;