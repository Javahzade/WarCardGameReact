/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const App = () => {
    const [count, setcount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [num1, setNum1] = useState(2);
    const [num2, setNum2] = useState(2);
  
    var arr = [
      require('./src/png/2.3.png'),
      require('./src/png/3.3.png'),
      require('./src/png/4.3.png'),
      require('./src/png/5.3.png'),
      require('./src/png/6.3.png'),
      require('./src/png/7.3.png'),
      require('./src/png/8.3.png'),
      require('./src/png/9.3.png'),
      require('./src/png/10.3.png'),
      require('./src/png/11.3.png'),
      require('./src/png/12.3.png'),
      require('./src/png/13.3.png'),
      require('./src/png/14.3.png'),
      require('./src/png/15.2.png'),
    ];
  
    const Deal = () => {
      var random1 = Math.floor(Math.random() * 14);
      var random2 = Math.floor(Math.random() * 14);
      console.log(random1);
      console.log(random2);
  
      setNum1(random1);
      setNum2(random2);
      if (random1 > random2) {
        setcount(count + 1);
      } else if (random1 < random2) {
        setCount2(count2 + 1);
      } else {
        setcount(count);
        setCount2(count2);
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.logo}>
          <Image source={require('./img/logo.png')} />
        </View>
        <View style={styles.cards}>
          <Image source={arr[num1]} />
          <Image source={arr[num2]} />
        </View>
        <View />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image source={require('./img/dealbutton.png')} />
        </TouchableOpacity>
        <View>
          <View>
            <Text />
            <Text />
          </View>
          <View>
            <Text />
            <Text />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36690c',
  },
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  score: {
    justifyContent: 'space-evenly',
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
});

export default App;
