import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

const Drink = props => {
    const [buttonValue, setButtonValue] = useState("+");
    return (
            <View style={styles.listItem}>
                <View style={styles.showcase}>
                    <Image style={styles.drinkImage} source={{uri: props.picture}}/>
                </View>
                <View style={styles.infocontainer}>
                    <Text style={styles.drinkName}>{props.title}</Text>
                    <TouchableHighlight style={styles.button} onPress={() => props.onSelectDrink(props.id)}>
                        <Text style={styles.textButton}>Details</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.addButton} 
                        onPress={() => {
                            //de buttonValue wordt aangepast wanneer er wordt op geklikt
                            if(buttonValue == "+"){
                                setButtonValue("-");
                            }else{
                                setButtonValue("+");
                            };
                            props.onSelectAdd(props.id, props.title);
                        }}>
                        <Text style={styles.textButton}>{buttonValue}</Text>
                    </TouchableHighlight>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        marginVertical: 5,
        padding: 10,
        width: '100%',
        height: 140,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    infocontainer:{
        width: 210,
        heigt: 140,
        padding: 10,
        paddingRight: 20,
        gap: 10,
        alignContent: 'space-around',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    showcase:{
        height: 140,
        width: 140,
        marginTop: -10,
        marginLeft: -10,
        backgroundColor: '#ffcd99',
    },
    drinkImage:{
        height: 120,
        width: 120,
        margin: 10,
        resizeMode: 'center',
    },
    drinkName:{
        fontSize: 18,
        margin: 5,
    },
    button:{
        backgroundColor: "#458695",
        borderRadius: 24,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        height: 32,
        width: 100,
    },
    addButton:{
        backgroundColor: "#ff8300",
        borderRadius: 360,
        padding: 5,
        height: 32,
        width: 32,
    },
    textButton:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
export default Drink;