import {Pressable, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Image} from 'expo-image';
import {GroupedButton} from '@components/button/grouped';
import {BasicButtonProps} from 'types/button';
import {useState} from 'react';

// 主页面
export default function Main() {
  const title = '樟树分拣加工中心 - IOT 智能叉车秤 #1 [ ZS-01 ]';

  const [showMenu, setMenu] = useState(false);
  const _setMenu = () => {
    setMenu(!showMenu);
  };

  const menus: {text: string; onPress: () => void}[] = [
    {
      text: '登出',
      onPress: () => {
        _setMenu();
        // do stuff...
      }
    },
    {
      text: '系统设置',
      onPress: () => {
        _setMenu();
      }
    },
    {
      text: '退出系统',
      onPress: () => {
        _setMenu();
      }
    }
  ];

  const buttonProps: BasicButtonProps[] = [
    {title: '清零', onPress: () => console.log('清零'), buttonClass: 'flex-1 ml-[12px]'},
    {title: '重置', onPress: () => console.log('重置'), buttonClass: 'flex-1'},
    {title: '上传', onPress: () => console.log('上传'), buttonClass: 'flex-1 mr-[12px]'}
  ];

  return (
    <View className="flex-1 justify-center items-center">
      <LinearGradient colors={['rgba(0, 136, 88, 0)', '#004D32']} style={{flex: 1, width: '100%'}}>
        <View className="flex flex-row items-center mt-3">
          <Image source="/assets/images/logo-small.svg" alt="绿环再生资源" className="w-[154px] h-[39px] ml-3"></Image>
          <Text className="flex-1 text-[24px]/[43px] tex-[#231F20] font-light ml-16">{title}</Text>
          <Pressable onPress={_setMenu}>
            <Image source="/assets/images/menu.svg" alt="菜单" className="w-[19px] h-[19px] mr-6"></Image>
          </Pressable>
        </View>
        {/*TODO menu 显隐动画*/}
        {showMenu && (
          <View className="fixed z-[6] top-12 right-3 bg-white w-[120px] py-1">
            {menus.map(item => (
              <Text
                key={item.text}
                onPress={item.onPress}
                className="text-[14px]/[22px] font-normal c-black pl-3 py-[5px] hover:bg-[#F5F5F5;]"
              >
                {item.text}
              </Text>
            ))}
          </View>
        )}

        <View className="flex flex-1 flex-row">
          <View className=" flex-grow-2 bg-red-500"></View>
          <View className=" flex-grow-1  bg-blue-500"></View>
        </View>
        <GroupedButton wrapperClass="mt-auto mb-[24px]" buttonProps={buttonProps}></GroupedButton>
      </LinearGradient>
    </View>
  );
}
