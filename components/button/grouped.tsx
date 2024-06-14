import BasicButton from '@components/button/basic';
import {View} from 'react-native';
import clsx from 'clsx';
import {GroupedButtonProps} from 'types/button';

export function GroupedButton(props: GroupedButtonProps) {
  const {withDefaultClass = true, wrapperClass, buttonProps = []} = props;

  const defaultClasses = 'flex flex-row flex-wrap justify-center gap-x-[27px]';
  const classes = clsx(withDefaultClass && defaultClasses, wrapperClass);

  return (
    <View className={classes}>
      {buttonProps.map(item => (
        <BasicButton
          key={item.title}
          title={item.title}
          onPress={item.onPress}
          withDefaultClass={item.withDefaultClass}
          buttonClass={item.buttonClass}
        ></BasicButton>
      ))}
      {/*<BasicButton title="重新自检" onPress={Toast.show('hhh')}></BasicButton>*/}
      {/*<BasicButton title="更改配置"></BasicButton>*/}
    </View>
  );
}
