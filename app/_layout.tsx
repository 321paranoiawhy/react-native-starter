import {Stack} from 'expo-router';
import '@assets/styles/global.css';
// import {default as StorybookEntryPoint} from '@/.storybook/index';

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//     </Stack>
//   );
// }

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}

let appEntryPoint = RootLayout;

console.log('BASE_URL', process.env.BASE_URL, typeof process.env.STORYBOOK_ENABLED);

if (process.env.STORYBOOK_ENABLED === 'true') {
  appEntryPoint = require('../.storybook/index').default;
  // appEntryPoint = StorybookEntryPoint;
}

export default appEntryPoint;
