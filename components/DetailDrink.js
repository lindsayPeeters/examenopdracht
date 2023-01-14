import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, ScrollView } from 'react-native';

import apiKey from '../apiKey';

const DetailDrink = props => {
    //variabele die getoond worden op het scherm en opnieuw kan ingevuld worden
    const [title, setTitle] = useState("-");
    const [description, setDescription] = useState("-");
    const [link, setLink] = useState("https://lindsaypeeters.com/wp-content/uploads/2023/01/image-11.png");
    
    const getDrinksById = async () => {
        try{
            const response = await fetch("https://drinks2.p.rapidapi.com/wp-json/wp/v2/posts/"+props.id+"/", 
            {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "drinks2.p.rapidapi.com",
              "x-rapidapi-key": apiKey
            }
          })
          const json = await response.json();
          //title toevoegen
          setTitle(json.title.rendered);
          //picture toevoegen
          setLink(json.rttpg_featured_image_url.full[0]);
          //description toevoegen
          const regex = /(<([^>]+)>)/ig; //reguliere expressie voor de <html> tags te selecteren in de string
          const result = json.excerpt.rendered.replace(regex, '');// de <html> tags worden verwijderd
          setDescription(result);
        }
        catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        getDrinksById();
      }, []);

    return(
        <ScrollView>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.drinkImage} source={{uri: link}}/>
            <Text style={styles.subTitle}>Productbeschrijving</Text>
            <Text>{description}</Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    drinkImage:{
        width: 82,
        height: 280,
        marginLeft: '40%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle:{
        fontSize: 16,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginTop: 40,
    }
});

export default DetailDrink;