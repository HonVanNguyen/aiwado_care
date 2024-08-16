// HomeScreen.tsx
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Main from '.'; 
import { homeScreenStyles } from '@/styles';
import SessionLogo from '../components/home/SessionLogo';

const HomeScreen: React.FC = () => {
  return (
    <Main>
      <ImageBackground
      source={require('../common/assets/images/aiwado-background/bg-aiwado@3x.png.png')} 
      style={homeScreenStyles.backgroundImage}>         
      <View style={homeScreenStyles.container}>
        {/* logo */}
        <SessionLogo/>
        {/* some information */}
   
        {/* category */}

        {/* banner */}

        {/* all procuct */}

        {/* e-voucher */}

        {/* phone card */}


        
        </View>
      </ImageBackground>
    </Main>
  );
};

export default HomeScreen;
