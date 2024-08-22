import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './ThemeContext';  
import { CartProvider } from './components/CartContext'; 


import ProfileScreen from './components/ProfileScreen'; 
import MenuScreen from './components/MenuScreen'; 
import Form1Screen from './components/Form1Screen';  
import Form2Screen from './components/Form2Screen';  
import Form3Screen from './components/Form3Screen';  
import CartScreen from './components/CartScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Form1">
            <Stack.Screen 
              name="Form1" 
              component={Form1Screen} 
              options={{ title: 'Form 1' }} 
            />
            <Stack.Screen 
              name="Form2" 
              component={Form2Screen} 
              options={{ title: 'Form 2' }} 
            />
            <Stack.Screen 
              name="Form3" 
              component={Form3Screen} 
              options={{ title: 'Form 3' }} 
            />
            <Stack.Screen 
              name="Menu" 
              component={MenuScreen} 
              options={{ title: 'Menu' }} 
            />
            <Stack.Screen 
              name="Profile" 
              component={ProfileScreen} 
              options={{ title: 'Profile' }} 
            />
            <Stack.Screen 
              name="Cart" 
              component={CartScreen} 
              options={{ title: 'Cart' }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
}
