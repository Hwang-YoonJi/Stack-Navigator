# React Native - Stack Navigator
Stack Navigator Study :)

## Demo

<img src="https://user-images.githubusercontent.com/63582123/126739003-415dca0c-53c8-485a-939e-ca5162635c2d.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/126739007-55f52e46-c0d8-4d07-8173-f0e6de42c21a.jpeg" width="347" height="599">

## Installation

```bash
npm install @react-navigation/native
```

```bash
npm install @react-navigation/stack
```

## Usage

### App.js

```jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen';
import SettingScreen from './Screen/SettingScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
        <Stack.Screen name="Setting" component={SettingScreen} 
         options={{ headerStyle: { backgroundColor: '#e6ceff' }, headerTintColor: '#673ab7' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*
Pressable은 기본적으로 touchableopacity와 같이 버튼의 역할을 하지만, 더 다양한 press 단계를 추적할 수 있다.

onPressIn: press가 활성화되었을 때
onPressOut: press 제스처가 비활성화되었을 때

onPressIn 된 이후에는 다음과 같은 스텝이 진행된다:
1) 유저가 손가락을 때면, onPressOut가 바로 따라옴
2) 유저가 손가락을 500 milliseconds 이상 누르고 있다가 때면, onLongPress가 바로 작동된다.
*/
```

### HomeScreen.js

```jsx
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function HomeScreen({navigation}) {
    const onPressHandler = () => {
      navigation.navigate('Setting');
    }
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Home Screen</Text>
        <Pressable onPress={onPressHandler} style={({pressed})=>({borderRadius:10, backgroundColor: pressed? '#ede7f6':'#b388ff'})}>
          <Text style={styles.button}>Go to Setting</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff1ff',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    button: {
      fontSize: 20,
      margin: 10,
    }
  });

export default HomeScreen;
```

### SettingScreen.js

```jsx
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function SettingScreen({navigation}) {
    const onPressHandler = () => {
      navigation.goBack();
    }
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Setting Screen</Text>
        <Pressable onPress={onPressHandler} style={({pressed})=>({borderRadius:10, backgroundColor: pressed? '#ede7f6':'#b388ff'})}>
          <Text style={styles.button}>Go Back to Home</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff1ff',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    button: {
      fontSize: 20,
      margin: 10,
    }
  });

export default SettingScreen;
```