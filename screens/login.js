import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Login to your account</Text>
        <TextInput placeholder='email/username'/>
        <TextInput placeholder='password' secureTextEntry='true'/>
        <Button title = 'Login' onPress={()=>navigation.navigate('home')}/>
    

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