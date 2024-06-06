import {Text, View} from 'react-native';
import {Link} from 'expo-router';
import clsx from 'clsx';

export default function Index() {
  const classes = clsx('foo', true && 'bar', 'baz');
  console.log(classes); // 'foo bar baz'

  return (
    <View
      className="flex-1 justify-center items-center"
      // style={{
      //   flex: 1,
      //   justifyContent: 'center',
      //   alignItems: 'center'
      // }}
    >
      <Text className="text-red-300 font-bold bg-green-500 italic">Edit app/index.tsx to edit this screen.</Text>

      <Link href="/home">to home</Link>

      <Link href="/request">to Request</Link>
      <Link href="/about">to About</Link>
    </View>
  );
}
