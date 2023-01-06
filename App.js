import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import DrinksScreen from './screens/drinksScreen';
import DetailScreen from './screens/detailScreen';
import FavoriteScreen from './screens/favoriteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Drinks" component={DrinksScreen}/>
          <Stack.Screen name="Details" component={DetailScreen}/>
          <Stack.Screen name="Favorites" component={FavoriteScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}