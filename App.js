import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import DrinksScreen from './screens/drinksScreen';
import DetailScreen from './screens/detailScreen';
import FavoriteScreen from './screens/favoriteScreen';
import DiscountScreen from './screens/discountScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Drinks" component={DrinksScreen}/>
          <Stack.Screen name="Details" component={DetailScreen}/>
          <Stack.Screen name="Favorites" component={FavoriteScreen}/>
          <Stack.Screen name="Discount" component={DiscountScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}