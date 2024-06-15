import {Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Image} from 'expo-image';
import {useHardwareStore} from '@stores/hardware';
import {GroupedButton} from '@components/button/grouped';
import {BasicButtonProps} from 'types/button';
import {useRouter} from 'expo-router';

// 选择消费者
export default function SelectConsumer() {
  // 车牌号 licensePlateNumber
  const licensePlateNumber = ['粤CD838H', '粤CD838H'];
  // 姓 + 手机号后四位
  const person = ['李 XXXX'];

  return (
    <View className="flex-1 justify-center items-center bg-[#004F33]">
      <View className="ml-[10px] mr-6">
        <Text>{'<'}</Text>
        <Text className="text-[24px]/[43px] c-white font-light">选择消费者</Text>
        <Image source="/assets/images/close.svg" alt="关闭" className="w-6 h-6 mt-auto mx-auto mb-8"></Image>
      </View>
    </View>
  );
}
