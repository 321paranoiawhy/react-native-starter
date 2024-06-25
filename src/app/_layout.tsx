import {Stack} from 'expo-router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import '@assets/styles/global.css';
import FeedbackLoading, {loadingRef} from '@components/feedback/loading';
import * as DevClient from 'expo-dev-client';

console.log('[DevClient.isDevelopmentBuild]', DevClient.isDevelopmentBuild());

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
      </Stack>
      {/*  TODO rename to: Feedback.Loading */}
      <FeedbackLoading ref={loadingRef}></FeedbackLoading>
    </SafeAreaProvider>
  );
}
