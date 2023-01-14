import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

import apiKey from '../apiKey';
import Drink from '../components/Drink';

const allDrinks = [];

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
            allDrinks.push(...json);
            console.log(allDrinks);
            setDrinks(allDrinks);
        } catch (error) {
          console.error(error);
        } 
    }

    useEffect(() => {
      getDrinks();
    }, []);  
 
    /* Filter om de drinks te kunnen opzoeken */
    const getDrinksByTitle = async (enteredText) => {
        const filteredDrinks = [];
        if(enteredText.length >= 3){//alle strings langer dan 3 argumenten waar het woord in voor komt
            var regEx = new RegExp(enteredText, 'i');
            allDrinks.forEach((item)=>{
                if(regEx.test(item.title.rendered)){
                    filteredDrinks.push(item);
                };
            });
            setDrinks(filteredDrinks);
        }else if (enteredText.length == 0){
            setDrinks(allDrinks);
        };
    };

    return(
      <View  style={styles.container}>
        <View style={styles.subnavigation}>
            <TouchableOpacity style={styles.subNavigationButton} onPress={() => { navigation.navigate('Favorites', {drinkId: -1}); }}>
              <Text style={styles.textButton}>Your favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subNavigationButton} onPress={() => { navigation.navigate('Discount'); }}>
              <Text style={styles.textButton}>Get discount</Text>
            </TouchableOpacity>
        </View>
        <TextInput
          placeholder="search drinks"
          style={styles.input}
          onChangeText={(enteredText) => { getDrinksByTitle(enteredText); }}
        />
        <FlatList 
          data={drinks}
          keyExtractor={item => item.id} 
          renderItem={({item}) => (
          <Drink 
            id={item.id} 
            title={item.title.rendered}
            picture={item.rttpg_featured_image_url.full[0]}
            navigation={navigation}
            onSelectDrink={(selectedId) => { navigation.navigate('Details', { drinkId: selectedId }); }}
            onSelectAdd={(selectedId, selectedTitle) => { navigation.navigate('Favorites', 
            { 
              drinkId: selectedId,
              drinkTitle: selectedTitle
            }); }}
            />
          )}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      padding: 40,
      paddingTop: 0,
      flex: 1,
    },
    subnavigation:{
      marginTop: 5,
      marginBottom: 5,
      flexDirection: 'row',
    },
    subNavigationButton:{
      width: 150,
      backgroundColor: '#7db6c3',
      marginHorizontal: 5,
      height: 40,
      padding: 10,
      borderRadius: 24,
    },
    textButton:{
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  });

export default DrinksScreen;