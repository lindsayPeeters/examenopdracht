import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Image } from 'react-native';

import FavoriteDrink from '../components/FavoriteDrink';

const FavoriteScreen= ({route, navigation}) => {
    const favoriteId = route.params.drinkId;
    const favoriteTitle = route.params.drinkTitle;

    /*const favoriteDrinks =[
        {
            id: "id",
            title: "title"
        }
    ];*/
    const [favoriteDrinks, setFavoriteDrinks]= useState([]);
   
    /*favoriteDrinks.push({id: favoriteId, title: favoriteTitle});*/
    useEffect(() => {
        setFavoriteDrinks([...favoriteDrinks, {id: favoriteId, title: favoriteTitle}]);
        //favoriteDrinks.push({id: favoriteId, title: favoriteTitle});
    }, []);

    return(
        <View style={styles.container}>
            <FlatList 
            data={favoriteDrinks}
            keyExtractor={item => item.id} 
            renderItem={({item}) => (
                <FavoriteDrink 
                    id={item.id} 
                    title={item.title}
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
    }
  });
export default FavoriteScreen;