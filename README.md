# WMS

## TODO

- 如何使用类似 `UnoCSS` 的 [Attributify](https://unocss.dev/presets/attributify) 类名属性化写法
- 自定义 `Debug` 工具, 类似微信小程序的 `v-console`
- 集成 `iconify` 图标库以获取更好的 `tree-shaking` 效果

## React Native 项目类型

- 纯 `React Native` 项目, 由 [React Native CLI](https://reactnative.dev/docs/getting-started-without-a-framework) 生成

  ```bash
  npx @react-native-community/cli@latest init AwesomeProject
  ```

- `Expo` 项目, 由 `create-expo-app` 生成

  ```bash
  npx create-expo-app AwesomeProject
  ```

  项目根目录下无 `android` 和 `ios` 文件夹, 无需关系原生配置, 不支持需原生配置的第三方库, 不支持集成原生代码

- [Development builds](https://docs.expo.dev/develop/development-builds/introduction/#how-are-development-builds-different-from-expo)

  ```bash
  # 安装 expo-dev-client
  # https://docs.expo.dev/versions/latest/sdk/dev-client/
  pnpm add expo-dev-client
  # 生成 android 和 ios 文件夹
  npx expo prebuild
  # 如有 android 和 ios 文件夹, 则先清空后再生成
  npx expo prebuild --clean

  # 如不执行 npx expo prebuild, 也可直接执行如下命令
  # 强烈推荐保持 `android` 和 `ios` 文件夹不可变 (不改变二者文件夹任何内容)
  # 因执行下述代码时, 会先行执行 npx expo prebuild, 这会覆盖已有的 android 和 ios 文件夹
  npx expo run:android # 自动生成 android 文件夹
  npx expo run:ios # 自动生成 ios 文件夹

  npx expo run:android --variant release

  # 使用 --device 指定模拟器或真机
  npx expo run:android --device <device>
  ```

在终端可输入 `s` 在 `Expo Go` 和 `Development build` 之间切换

## 集成原生代码

使用 `Expo Modules`

## Docker

```bash
# 项目根目录执行
docker-compose up -d
```

## Android 环境配置

- [Set Up Your Environment - Android](https://reactnative.dev/docs/set-up-your-environment?platform=android)
- [Android Studio Emulator - Expo Docs](https://docs.expo.dev/workflow/android-studio-emulator/)

```bash
# -p 表示 --platform
# 使用 eas 服务打包, 不依赖于电脑操作系统, 交由 `expo` 提供的 `eas` 服务云端打包
# 打包状态和产物可在控制台查看
eas build -p android --profile preview
eas build -p android --profile release

# 打包所有平台
eas build -p all

# 本地打包, 官方仅对 `macOS` 和 `Linux` 本地打包提供支持
# `windows` 须在 `WSL` 中实现本地打包, 且官方并不保证兼容性
# `windows` 也可使用 `Docker` 进行打包, 编写 `Dockerfile` 即可
# https://docs.expo.dev/build-reference/local-builds/
eas build -p android --profile release --local
```

手动本地打包:

```bash
cd android

./gradlew --stop

# 清理缓存
# ./gradlew clean

# 打包完成后, 打包产物 (apk) 路径
# android\app\build\outputs\apk\release\app-release.apk
# ./gradlew aR
./gradlew assembleRelease
# ./gradlew assembleDebug
```

### 配置环境检测

使用 [doctor](https://reactnative.dev/blog/2019/11/18/react-native-doctor) 命令 (类似 `flutter doctor` 命令) 检查开发环境配置:

```bash
npx @react-native-community/cli doctor

# TODO expo doctor
```

### `expo-env-info`

- [expo-env-info - npm](https://www.npmjs.com/package/expo-env-info)

安装:

```bash
pnpm add expo-env-info -g
```

查看信息:

```bash
# npm
# npx expo-env-info

# pnpm
pnpm expo-env-info
```

### 无线连接真机

```bash
# 查看已连接的安卓设备
adb devices

# ip 10.66.63.250 为安卓设备 ip
# 端口号默认为 5555
adb connect 10.66.63.250:5555

# 断开连接
adb disconnect
```

exp://10.66.62.228:8081

### 调试

`Expo` 项目在模拟器上快捷键 `Ctrl + M` 可呼出调试菜单, 真机上摇晃两下真机即可呼出调试菜单

### `macOS`

下载 `node` 和 `watchman`:

```bash
brew install node
brew install watchman
```

- 如果已安装 `node` 且 `node` 版本高于 `18`, 则可跳过 `brew install node`
- 终端输入 `brew info watchman` 查看是否已安装 `watchman`

下载 `JDK`:

```bash
brew install --cask zulu@17

# Get path to where cask was installed to double-click installer
brew info --cask zulu@17
```

下载成功提示:

> installer: Package name is Azul Zulu JDK 17.50+19
> installer: Installing at base path /
> installer: The install was successful.
> 🍺 zulu@17 was successfully installed!

使用 `open .bashrc` 或 `open .zshrc` 打开终端配置文件并配置环境变量 `JAVA_HOME`:

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
```

如果已安装 `JDK`, 请确保其版本为 `JDK 17`, 并正确配置环境变量 `JAVA_HOME`

下载 `Android Studio`:

- [Android Studio Download](https://developer.android.com/studio/index.html)

配置环境变量:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

查看环境变量配置:

```bash
# /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
echo $JAVA_HOME

# /Users/lh-pc/Library/Android/sdk
echo $ANDROID_HOME
```

使用 `Wi-Fi` 连接 `Android` 真机调试:

- [Method 2: Connect via Wi-Fi](https://reactnative.dev/docs/running-on-device#method-2-connect-via-wi-fi)
- 电脑和 `Android` 设备处于同一 `Wi-Fi`

## 注意

- `RN` 默认属性有 `flex-direction: column;`, 这不同于 `web` 上 `flex` 盒子默认 `flex-direction: row;`, 在使用时注意添加原子类 `flex-row`

## 组件库

使用 `React Native UI Lib`:

```bash
pnpm add react-native-ui-lib
```

需要以下[前置依赖](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup#peer-dependencies), 如无则须手动安装:

```bash
pnpm add react-native-reanimated react-native-gesture-handler
```

## React Native

- 样式无继承, 这一点有别于 `web` 的继承机制, 如字体、文本颜色、行高都无继承, 须手动一一添加样式
- 样式支持程度有限, [Valid style props for react native](https://gist.github.com/prianto/cffcfbb772f9ffb25ff844345215ea99)
- `View` 组件默认开启 `flex`, 但其默认行为

  - `flex-direction: column;`, `web` 默认为 `flex-direction: row;`
  - `align-content: flex-start;`, `web` 默认为 `align-content: stretch;`
  - `flex-shrink: 0;`, `web` 默认为 `flex-shrink: 1;`

- 文本必须处于 `Text` 组件内, 否则报错:

  ::: warning
  Error: Text strings must be rendered within a <Text> component
  :::

- `display` 属性值只有 `flex` 和 `none`
- 不支持渐变色, 可使用

  - [react native linear gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
  - [Expo LinearGradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

- 以下组件 (`Touchable Components`) 支持 `onPress` 事件属性:

  - `Pressable`
  - `TouchableHighlight`
  - `TouchableOpacity`
  - `TouchableNativeFeedback`
  - `TouchabelWithoutFeedback`

## tailwind

### Basic 基础/哲学

- `1rem` 对应 `16px`, 不带单位的数字 `1` 表示 `0.25rem (4px)`, 不建议修改此数值映射规则
- 默认仅提供有限的原子类, 如 `grow` 仅存在 `grow` 和 `grow-0` 两个原子类, 分别表示 `flex-grow: 1;` 和 `flex-grow: 0;`
- 任意值须用 `[]` 包裹, 如 `w-[100px]`, 应注意 `w-100` 与 `w-[100px]` 并不等价
- 原子类中使用 `theme` 变量: `text-theme(primary.red)`, 须确保 `primary.red` 定义于 `theme` 中
- 由 `tailwind` 生成 `output.css`:

  ```bash
  npx tailwind -o output.css
  ```

  可据此查看生成的 `css` 文件是否完全包含需要生成的 `css class` 类名

#### `calc`

`CSS` 中使用 `calc` 运算符前后须含空格, 否则不生效:

```css
div {
  width: calc(100% - 50px);
}
```

`tailwind` 原子类中使用 `calc` 运算符前后不含空格, 否则不生效:

```html
<div class="w-[calc(100%-50px)]"></div>
```

或使用 `_` 代替 `CSS` 中应有空格:

```html
<div class="w-[calc(100%_-_50px)]"></div>
```

See [Handling whitespace -tailwindcss](https://tailwindcss.com/docs/adding-custom-styles#handling-whitespace)

`unocss` 原子类中使用 `calc` 运算符前后同样不含空格以[对齐 tailwind](https://github.com/unocss/unocss/issues/180):

```html
<div class="w-[calc(100%-50px)]"></div>
```

#### `!important`

`tailwind` 中使用前缀标记 `!` 表示 `!important`:

```html
<div class="!m-auto"></div>
```

`unocss` 中使用后缀标记 `!` 表示 `!important`:

```html
<div class="m-auto!"></div>
```

### 插件

#### @tailwindcss/aspect-ratio

- [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
- [tailwindcss-aspect-ratio](https://github.com/webdna/tailwindcss-aspect-ratio) 已废弃, 推荐使用 `@tailwindcss/aspect-ratio`

`aspect-ratio` 属性兼容性较差, 可使用 `@tailwindcss/aspect-ratio` 插件以兼容更低版本的浏览器

```bash
pnpm add @tailwindcss/aspect-ratio -D
```

`tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [require('@tailwindcss/aspect-ratio')]
};
```

### 字体

#### 字体大小 `font-size`

`tailwind` 原子类中使用 `text-<size>` 语法表示 `font-size: <size>`:

- `text-2xl` <=> `font-size: 1.5rem;` (`24px`), 同时设定 `line-height: 2rem;` (`32px`)
- `text-4xl` <=> `font-size: 2.25rem;` (`36px`), 同时设定 `line-height: 2.5rem;` (`40px`)
- 任意值
  - `text-[14px]` <=> `font-size: 14px;`
  - `text-[14px]/[20px]` <=> `font-size: 14px; line-height: 20px;`

本项目常用:

- `text-2xl/[43px]` <=> `font-size: 1.5rem; line-height: 43px;`

#### 字重 `font-weight`

`tailwind` 原子类中使用 `font-<weight>` 语法表示 `font-weight: <weight>`:

- `font-light` <=> `font-weight: 300;`
- `font-normal` <=> `font-weight: 400;`
- `font-medium` <=> `font-weight: 500;`
- `font-semibold` <=> `font-weight: 600;`
- `font-bold` <=> `font-weight: 700;`

#### 文本颜色 `text-color`

`tailwind` 原子类中使用 `text-<color>` 语法表示 `text-color: <color>`:

- `text-white` 纯白色文字 `color: rgb(255 255 255);`
- `text-black` 纯黑色文字 `color: rgb(0 0 0);`
- `text-transparent` 透明文字 `color: transparent;`
- 设置文本颜色同时设置透明度
  - `text-blue-600/75` 透明度 `0.75`
  - `text-blue-600/[.06]` 透明度 `0.06`
- 任意值
  - `text-[#50d71e]` <=> `color: #50d71e;`
