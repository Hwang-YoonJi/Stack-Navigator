import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Setting');
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Home Screen</Text>
      <Pressable onPress={onPressHandler} style={({pressed})=>({backgroundColor: pressed? '#ede7f6':'#b388ff'})}>
        <Text style={styles.button}>Go to Setting</Text>
      </Pressable>
    </View>
  );
}

function SettingScreen({navigation}) {
  const onPressHandler = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Setting Screen</Text>
      <Pressable onPress={onPressHandler} style={({pressed})=>({backgroundColor: pressed? '#ede7f6':'#b388ff'})}>
        <Text style={styles.button}>Go Back to Home</Text>
      </Pressable>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => null }} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 50,
  },
  button: {
    fontSize: 20,
    margin: 10,
  }
});

export default App;

/*
Pressable은 기본적으로 touchableopacity와 같이 버튼의 역할을 하지만, 더 다양한 press 단계를 추적할 수 있다.

onPressIn: press가 활성화되었을 때
onPressOut: press 제스처가 비활성화되었을 때

onPressIn 된 이후에는 다음과 같은 스텝이 진행된다:
1) 유저가 손가락을 때면, onPressOut가 바로 따라옴
2) 유저가 손가락을 500 milliseconds 이상 누르고 있다가 때면, onLongPress가 바로 작동된다.
*/