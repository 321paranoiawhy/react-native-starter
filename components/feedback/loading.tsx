import React, {useEffect, useImperativeHandle, useState} from 'react';
import {Modal, StatusBar, View, ActivityIndicator, StyleSheet} from 'react-native';

export const loadingRef = React.createRef<any>();

export const loadingInstance = {
  show: () => {
    loadingRef?.current?.show();
  },
  hide: () => {
    loadingRef?.current?.hide();
  }
};

/**
 * @description 加载动画效果
 *
 * 这里将其封装为全局唯一单例, 即至多会显示一个加载动画
 * @link https://element-plus.org/zh-CN/component/loading.html
 * @example
 * ```tsx
 * import {loadingInstance} from '@components/feedback/loading';
 *
 * loadingInstance.show();
 * loadingInstance.hide();
 * ```
 * @todo
 * 多实例
 * 样式控制
 */
const FeedbackLoading = React.forwardRef((_props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);

  const show = () => {
    // Error: Cannot update a component (`ForwardRef`) while rendering a different component
    // setVisible(true);
    // 暂时使用 useEffect 解决之
    useEffect(() => {
      setVisible(true);
    }, []);
  };

  const hide = () => {
    useEffect(() => {
      setVisible(false);
    }, []);
  };

  useImperativeHandle(ref, () => {
    return {show: show, hide: hide};
  });

  return (
    <Modal visible={visible} animationType={'none'} transparent>
      <StatusBar backgroundColor={'rgba(0,0,0,0.6)'} barStyle={'light-content'} />
      <View style={styles.main} id="custom">
        <ActivityIndicator color="white" size="large" />
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FeedbackLoading;
