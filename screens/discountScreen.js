import React, { useRef } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Animated} from 'react-native';

const DiscountScreen = () =>{
    const [number, onChangeNumber] = React.useState(null);
    const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Start animatie
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: 'false',
    }).start();
  };
    return(
        <View>
            <Animated.View style={[styles.discountContainer,{opacity: fadeAnim}]}>
                <Text style={styles.title}>U heeft:</Text>
                <Text style={styles.discount}>30%</Text>
                <Text styles={styles.subTitle}>Op alle artikelen van Fanta</Text>
            </Animated.View>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Vul je klantencode</Text>
                <Text style={styles.subTitle}>En ontdek de korting van de maand</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="089996665"
                    keyboardType="numeric"
                />            
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={fadeIn}>Bevestig</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    discountContainer:{
        marginHorizontal: 30,
        padding: '10%',
    },
    discount:{
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#458695',
    },
    inputContainer:{
        backgroundColor: 'white',
        padding: '10%',
        margin: 30,
        borderRadius: 16,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle:{
        fontSize: 16,
    },
    textInput:{
        heigt: 40,
        width: 200,
        borderWidth: 1,
        borderColor: "#969696",
        margin: 12,
        padding: 10,
    },
    button:{
        backgroundColor: '#458695',
        padding: 5,
        margin: 10,
        height: 40,
        width: 200,
        borderRadius: 24,
    },
    buttonText:{
        textAlign: 'center',
        paddingHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});
export default DiscountScreen;