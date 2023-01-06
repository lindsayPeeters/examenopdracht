import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, FlatList, TextInput } from 'react-native';
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
          setDrinks(json);
          console.log(setDrinks);
        } catch (error) {
          console.error(error);
        } 
      }
      useEffect(() => {
        getDrinks();
      }, []);  

      
      /* Nog filter toevoegen */
    return(
        <View style={styles.container}>
        <FlatList 
          data={drinks}
          keyExtractor={item => item.id} 
          renderItem={({item}) => (
          <Drink 
            id={item.id} 
            title={item.title.rendered}
            /*rttpg_excerpt={item.rttpg_excerpt}*/
            /*image={item.rttpg_featured_image_url.thumbnail}*/
            navigation={navigation}
            onSelectDrink={(selectedId) => { navigation.navigate('Details', { drinkId: selectedId }); }}
            
            />
          )}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      padding: 40,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'space-evenly',
    }
  });

export default DrinksScreen;