import {TClass} from 'types/class';

export interface BasicButtonProps {
  title: string;
  onPress?: () => void;
  /**
   * 是否包含默认类名, 即有样式和无样式组件 (headless UI component)
   */
  withDefaultClass?: boolean;
  buttonClass?: TClass;
  textClass?: TClass;
}

export interface GroupedButtonProps {
  /**
   * 是否包含默认类名, 即有样式和无样式组件 (headless UI component)
   */
  withDefaultClass?: boolean;
  /**
   * 类名, 注意命名不可为 className, 否则与 nativewind 的 className 冲突
   */
  wrapperClass?: TClass;
  /**
   * 每个按钮共有类名
   */
  buttonProps?: BasicButtonProps[];
}
