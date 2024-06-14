import {Text, View} from 'react-native';
import {Link, useNavigation, useRouter} from 'expo-router';
import {LinearGradient} from 'expo-linear-gradient';
import {useEffect} from 'react';

export default function Index() {
  const navigation = useNavigation();
  // setOptions 类似 ECharts 和原生微信小程序
  // 这里必须使用 useEffect, 否则会报错
  useEffect(() => {
    navigation.setOptions({title: '动态标题'});
  }, []);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/bind-station');
    }, 3000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <LinearGradient colors={['rgba(0, 136, 88, 0)', '#004D32']} style={{flex: 1, width: '100%'}}>
        {/*<Link href="/request">to Request</Link>*/}
        {/*<Link href="/about">to About</Link>*/}

        <Text className="text-[24px]/[43px] c-white bg-[#155D1D] text-center fixed bottom-[100px] left-0 right-0 h-[48px]">
          IOT 智能叉车秤
        </Text>
      </LinearGradient>
    </View>
  );
}
