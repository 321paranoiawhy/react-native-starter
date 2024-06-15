import {Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Image} from 'expo-image';
import {useHardwareStore} from '@stores/hardware';
import {GroupedButton} from '@components/button/grouped';
import {BasicButtonProps} from 'types/button';
import {useLocalSearchParams, useRouter} from 'expo-router';
import CommonHeader from '@components/common/header';
import BasicButton from '@components/button/basic';
import {useState} from 'react';

type TParams = '1' | '2';

/**
 * 类型枚举
 */
// enum TypeEnum {
//   MATERIAL, // 物料
//   CONTAINER_TARE_WEIGHT // 容器皮重
// }

type TItem = {
  name: string;
  id?: string;
  children?: {
    name: string;
    id?: string;
  }[];
};

// 物料
const MATERIAL: TItem[] = [
  {name: '常用', children: [{name: '透明PET膜 (无胶)'}]},
  {name: '塑料'},
  {name: '金属'},
  {name: '纸类'}
];

// 容器皮重
const CONTAINER_TARE_WEIGHT = [
  {name: '常用', children: [{name: '660L 工业垃圾箱'}]},
  {name: '中转框'},
  {name: '吨包'},
  {name: '工业垃圾箱'}
];

const TYPE_MAP: Record<string, {text: string; key: 'MATERIAL' | 'CONTAINER_TARE_WEIGHT'; value: TItem[]}> = {
  1: {
    text: '物料',
    key: 'MATERIAL',
    value: MATERIAL
  },
  2: {
    text: '容器皮重',
    key: 'CONTAINER_TARE_WEIGHT',
    value: CONTAINER_TARE_WEIGHT
  }
};

// 选择[物料]/[容器皮重]
export default function SelectConsumer() {
  // https://docs.expo.dev/router/reference/search-parameters/#statically-typed-search-parameters
  const {type, titlePrefix} = useLocalSearchParams<{type: keyof typeof TYPE_MAP; titlePrefix: string}>();
  console.log(type, titlePrefix);

  const [firstLevel, setFirstLevel] = useState(0);

  const activeFirstLevelClass = '!c-white';
  const inactiveFirstLevelClass = '!text-[#C4C4C4] opacity-[0.34]';

  return (
    <View className="flex-1 bg-[#004F33]">
      <CommonHeader title={(titlePrefix || '选择') + TYPE_MAP[type as keyof typeof TYPE_MAP]?.text}></CommonHeader>

      <View className="flex flex-row flex-wrap gap-4">
        {TYPE_MAP[type!]?.value?.map((item, index) => (
          <BasicButton
            key={item.name}
            title={item.name}
            buttonClass="bg-[#003F38] w-[150px] rounded-[10px]"
            textClass={index === firstLevel ? activeFirstLevelClass : inactiveFirstLevelClass}
          ></BasicButton>
        ))}
      </View>
    </View>
  );
}
