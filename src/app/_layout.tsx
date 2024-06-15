import {Stack} from 'expo-router';
import {Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import '@assets/styles/global.css';
import FeedbackLoading, {loadingRef} from '@components/feedback/loading';

export default function RootLayout() {
  return (
    // 全局共用 header 样式
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerRight: () => <Button onPress={() => alert('This is a button!')} title="Info" color="#f4511e" />
        }}
      >
        <Stack.Screen name="index" options={{title: '首页 header title'}} />
      </Stack>
      {/*  TODO rename to: Feedback.Loading */}
      <FeedbackLoading ref={loadingRef}></FeedbackLoading>
    </SafeAreaProvider>
  );
}
