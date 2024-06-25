import {Pressable, Text} from 'react-native';
import clsx from 'clsx';
import {BasicButtonProps} from 'types/button';

// import {Button} from 'react-native';
// color, ios 为文本颜色, android 为背景颜色, 且无法同时设置文本颜色和背景颜色
// <Button title="重新自检" color="#E7E7E7"></Button>
// see
// https://reactnative.dev/docs/button
// https://docs.expo.dev/ui-programming/react-native-styling-buttons/
export default function BasicButton(props: BasicButtonProps) {
  const {title = 'title', onPress = () => {}, withDefaultClass = true, buttonClass, textClass} = props;

  const defaultClasses = 'bg-[#E7E7E7] py-[9px] w-[180px]';
  const buttonClasses = clsx(withDefaultClass && defaultClasses, buttonClass);

  const defaultTextClasses = 'c-black text-center text-2xl font-medium';
  const textClasses = clsx(withDefaultClass && defaultTextClasses, textClass);

  return (
    <Pressable onPress={onPress} className={buttonClasses}>
      <Text className={textClasses}>{title}</Text>
    </Pressable>
  );
}
