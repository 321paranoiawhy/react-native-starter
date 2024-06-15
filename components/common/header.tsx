import {Pressable, Text, View} from 'react-native';
import {Image} from 'expo-image';

interface IProps {
  onBack?: () => void;
  title?: string;
  onClose?: () => void;
}

export default function CommonHeader(props: IProps) {
  const {onBack = () => {}, title = '', onClose = () => {}} = props;

  return (
    <View className="flex flex-row items-center justify-between ml-[10px] mr-6">
      <Text onPress={onBack} className="flex-1 c-white">
        {'<'}
      </Text>
      <Text className="flex-1 text-[24px]/[43px] c-white font-light">{title}</Text>
      <Pressable onPress={onClose}>
        <Image source="/assets/images/close.svg" alt="关闭" className="w-6 h-6"></Image>
      </Pressable>
    </View>
  );
}
