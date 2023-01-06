import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

const Drink = props => {
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
        padding: 10,
        gap: 10,
        alignContent: 'space-around',
    },
    showcase:{
        height: 140,
        width: 140,
        marginTop: -10,
        marginLeft: -10,
        backgroundColor: '#458695',
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
    textButton:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
export default Drink;