import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'

//* npm i @react-navigation/native
//* npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated@latest

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          headerStyle: {
            backgroundColor: '#3c0a6b',
          },
          headerTintColor: 'white',
          // drawerStyle: {
          //   backgroundColor: '#ccc'
          // },
        }}>
        <Drawer.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
          }}
        />
        <Drawer.Screen
          name='User'
          component={UserScreen}
          options={{
            drawerIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} /> 
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
