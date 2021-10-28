import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput placeholder='email'/>
        <TextInput placeholder='username'/>
        <TextInput placeholder='password' secureTextEntry='true'/>
        <Text onPress={()=>navigation.navigate('home')}> Login</Text>
    

        <StatusBar style="auto" />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigation;