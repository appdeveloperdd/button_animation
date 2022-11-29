/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
const App = () => {
  const [buttonState, setButtonState] = useState(1);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim1 = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeIn1 = () => {
    Animated.timing(fadeAnim1, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleButton = () => {
    fadeIn();

    setTimeout(() => {
      setButtonState(2);
      fadeIn1();

      setTimeout(() => {
        setButtonState(3);
      }, 1000);
    }, 1000);
  };
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <TouchableOpacity onPress={handleButton} activeOpacity={1}>
        {buttonState != 3 ? (
          <View>
            <Animated.Image
              source={require('./assets/join.png')}
              style={{
                resizeMode: 'contain',
                height: 70,
                width: 120,
                // position: 'absolute',
                alignSelf: 'center',
              }}
            />
            <Animated.Image
              source={require('./assets/checked.png')}
              style={{
                resizeMode: 'contain',
                height: 70,
                width: 120,
                position: 'absolute',
                alignSelf: 'center',
                opacity: fadeAnim,
              }}
            />
          </View>
        ) : (
          <Animated.Image
            source={require('./assets/joined.png')}
            style={{
              resizeMode: 'contain',
              height: 70,
              width: 80,
              alignSelf: 'center',
              opacity: fadeAnim1,
            }}
          />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
