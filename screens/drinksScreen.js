import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, TouchableHighlight } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

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
      <View  style={styles.container}>
        <View style={styles.subnavigation}>
            <TouchableHighlight style={styles.subNavigationButton} onPress={() => { navigation.navigate('Favorites', {drinkId: -1}); }}>
              <Text style={styles.textButton}>Your favorites</Text>
            </TouchableHighlight>
        </View>
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
      height: 40,
      backgroundColor: '#7db6c3',
      padding: 10,
    },
    subNavigationButton:{
      width: 150,
    },
    textButton:{
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    }
  });

export default DrinksScreen;