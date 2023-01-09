import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Image } from 'react-native';

import FavoriteDrink from '../components/FavoriteDrink';

const listFavorites = [];

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
        if(favoriteId!=-1){
            const currentIndex = listFavorites.findIndex((value,number,obj)=>
            {
                return value.id == favoriteId;
            });
            if (currentIndex == -1)
            {
                //de geselecteerde drink zit nog niet in de lijst van de favoriteDrinks
                //dus deze wordt toegevoegd
                listFavorites.push({id: favoriteId, title: favoriteTitle});
            } else {
                //de geselecteerde drink zit al in de lijst
                //dus deze wordt opnieuw verwijderd
                listFavorites.splice(currentIndex,1);
            };
        }
        //de nieuwe lijst wordt geplaatst
        setFavoriteDrinks(listFavorites);
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.subTitle}>Hou je favoriete drank bij voor een vlot winkelbezoek.</Text>
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
    },
    subTitle:{
        fontSize: 20,
        marginBottom: 30,
    }
  });
export default FavoriteScreen;