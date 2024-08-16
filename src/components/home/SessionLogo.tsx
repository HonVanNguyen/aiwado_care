import { View, Text, Image, Animated } from 'react-native'
import React from 'react'
import { ImagePath } from '@/common/assets/constants/imagePath'
import { SessionLogoStyle } from '@/styles/Home/SessionLogoStyled'

const SessionLogo = () => {
  return (
    <View style={SessionLogoStyle.SessionLogo}>
      <Image

      source={ImagePath.backgroundAiwado}
      ></Image>
      <Image
      style={SessionLogoStyle.ImgSearch}
      source={ImagePath.imgBigLogo}
      ></Image>
    </View>
  )
}

export default SessionLogo