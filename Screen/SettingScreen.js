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