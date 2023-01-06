import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import apiKey from '../apiKey';

const DetailDrink = props => {
    const [detailDrink, setDetailDrink] = useState({});
    const [title, setTitle] = useState("-");
    const [picture, setPicture] = useState([]);
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
          console.log(json);
          setDetailDrink(json);
          //title toevoegen
          console.log(json.title.rendered);
          setTitle(json.title.rendered);
          console.log(title);
          //picture toevoegen
          setPicture(json.rttpg_featured_image_url.full);
          console.log("picture:");
          console.log(picture);
          setLink(json.rttpg_featured_image_url.full[0]);
          //setLink("https://m.media-amazon.com/images/M/MV5BOWMyNzExNzctOWNjNy00MzMxLWJlYWMtYjJiYmM0Mjg0YWZmXkEyXkFqcGdeQXVyNTU5NjAwMTQ@._V1_.jpg");          console.log("link:");
          console.log(link);
          //description toevoegen
          const regex = /(<([^>]+)>)/ig;
          const result = json.excerpt.rendered.replace(regex, '');
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