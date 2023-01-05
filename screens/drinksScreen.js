import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import apiKey from '../apiKey';

import Drink from '../components/Drink';
const DrinksScreen = ({navigation}) => {
    //array drinks
    const [drinks, setDrinks] = useState([]);
    //opvragen drinks
    const getDrinks = async () =>{
        try{
            const response = await fetch("https://drinks2.p.rapidapi.com/wp-json/wp/v2/posts", 
            {
            "method": "GET",
            "params": "{categories: '15'}",
            "headers": {
              "x-rapidapi-host": "drinks2.p.rapidapi.com",
              "x-rapidapi-key": apiKey
            }
          })
          const json = await response.json();
          console.log(json);
          setDrinks(json.results);
        } catch (error) {
          console.error(error);
        } 
      }
      useEffect(() => {
        getDrinks();
      }, []);  
    return(
      <View>
        <FlatList data={drinks} keyExtractor={item => item.drinks_id} renderItem={({item}) => 
        (<Drink id={item.drinks_id} title={item.title} navigation={navigation} onSelectDrink={(selectedId) => { navigation.navigate('Details', {drinkId: selectedId})}}/>)}>
        </FlatList>
      </View>
    );
  }

export default DrinksScreen;