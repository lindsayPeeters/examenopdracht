import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import apiKey from '../apiKey';

import Drink from '../components/Drink';
const DrinksScreen = ({navigation}) =>{
    //array drinks
    const [drinks, setDrinks] = useState([]);
    //opvragen drinks
    const getDrinks = async () =>{};     
    return(
        <FlatList data={drinks} keyExtractor={item => item.drinks_id} renderItem={({item}) => 
        (<Drink id={item.drinks_id} title={item.title}/>)}>
        </FlatList>
    );
    };
export default DrinksScreen;