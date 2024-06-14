import {Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Image} from 'expo-image';
import {useHardwareStore} from '@stores/hardware';
import {GroupedButton} from '@components/button/grouped';
import {BasicButtonProps} from 'types/button';
import {useRouter} from 'expo-router';

// 自检硬件
export default function SelfCheck() {
  const electronicScale = useHardwareStore(state => state.electronicScale);
  const labelPrint = useHardwareStore(state => state.labelPrint);
  const receiptPrint = useHardwareStore(state => state.receiptPrint);

  const hardware = [
    {text: '外接电子秤模块', value: electronicScale},
    {text: '外接标签打印模块', value: labelPrint},
    {text: '外接小票打印模块', value: receiptPrint}
  ];

  const setElectronicScale = useHardwareStore(state => state.setElectronicScale);
  const setLabelPrint = useHardwareStore(state => state.setLabelPrint);
  const setReceiptPrint = useHardwareStore(state => state.setReceiptPrint);

  const buttonProps: BasicButtonProps[] = [
    {title: '重新自检', onPress: () => console.log('重新自检')},
    {title: '更改配置', onPress: () => console.log('更改配置')}
  ];

  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <LinearGradient colors={['rgba(0, 136, 88, 0)', '#004D32']} style={{flex: 1, width: '100%'}}>
        <Image
          source="/assets/images/setting.svg"
          alt="设置"
          className="w-[107px] h-[107px] mt-auto mx-auto mb-8"
        ></Image>

        {hardware.map(item => (
          <View className="w-[400px] pr-4 flex flex-row mx-auto" key={item.text}>
            <Text className="flex-1 text-[24px]/[43px] c-white">{item.text}</Text>
            <Text className="text-[24px]/[43px] c-white">{item.value ? '成功' : '失败'}</Text>
          </View>
        ))}

        {/*<Button onPress={() => setElectronicScale(!electronicScale)} title="setElectronicScale"></Button>*/}
        {/*<Button onPress={() => setLabelPrint(!labelPrint)} title="setLabelPrint"></Button>*/}
        {/*<Button onPress={() => setReceiptPrint(!receiptPrint)} title="setReceiptPrint"></Button>*/}

        <Text
          className="text-[24px]/[43px] c-white bg-[#155D1D] text-center  h-[48px] mt-16 mb-6"
          onPress={() => router.push('/main')}
        >
          自检硬件
        </Text>
        <GroupedButton wrapperClass="mb-[24px]" buttonProps={buttonProps}></GroupedButton>
      </LinearGradient>
    </View>
  );
}
