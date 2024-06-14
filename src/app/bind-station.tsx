import {Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Link} from 'expo-router';

// 绑定工站
export default function BindStation() {
  return (
    <View className="flex-1 justify-center items-center">
      <LinearGradient colors={['rgba(0, 136, 88, 0)', '#004D32']} style={{flex: 1, width: '100%'}}>
        <Link href="/self-check">跳转至自检硬件</Link>

        <Text className="text-[24px]/[43px] c-white bg-[#155D1D] text-center fixed bottom-[100px] left-0 right-0 h-[48px]">
          请扫描绑定工站
        </Text>
      </LinearGradient>
    </View>
  );
}
