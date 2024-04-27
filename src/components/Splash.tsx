import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

const Splash = (props) => {

  setTimeout(() => {
    //navigation.replace('Login')
    props.navigation.navigate("Login")
  }, 3000)

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/cloud_bg.png')}
        style={styles.backgroundImage}>
        {/* Image on Top */}
        <View style={styles.centered}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.topImage}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Splash;

