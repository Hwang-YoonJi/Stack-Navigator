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