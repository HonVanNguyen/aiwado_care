// Main.tsx
import React, { useEffect, ReactNode } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { View, StyleSheet, ImageBackground } from 'react-native';

SplashScreen.preventAutoHideAsync();

const Main: React.FC<{ children: ReactNode }> = ({ children }) => {
  let [fontsLoaded, fontError] = useFonts({ Inter_900Black });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // return <View style={styles.container}>{children}</View>;
  return (
    <ImageBackground
      source={require('../common/assets/images/aiwado-background/bg-aiwado@3x.png.png')} // Adjust the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // 'cover' scales the image to cover the background
  },
});

export default Main;
