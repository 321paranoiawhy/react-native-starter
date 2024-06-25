import {StyleSheet} from 'react-native';

export const CONSTANT_STYLES = StyleSheet.create({
  gradientBg: {
    // RN 不支持渐变色 backgroundImage
    // react-native-linear-gradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
    // Expo LinearGradient: https://docs.expo.dev/versions/latest/sdk/linear-gradient/
    backgroundColor: 'linear-gradient(180deg, rgba(0, 136, 88, 0) 0%, #004D32 100%)'
  }
});
