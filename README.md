# WMS

## TODO

- 如何使用类似 `UnoCSS` 的 [Attributify](https://unocss.dev/presets/attributify) 类名属性化写法
- 自定义 `Debug` 工具, 类似微信小程序的 `v-console`
- 集成 `iconify` 图标库以获取更好的 `tree-shaking` 效果

## 组件库

使用 `React Native UI Lib`:

```bash
pnpm add react-native-ui-lib
```

需要以下[前置依赖](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup#peer-dependencies), 如无则须手动安装:

```bash
pnpm add react-native-reanimated react-native-gesture-handler
```

## tailwind

### Basic 基础/哲学

- `1rem` 对应 `16px`, 不带单位的数字 `1` 表示 `0.25rem (4px)`, 不建议修改此数值映射规则
- 默认仅提供有限的原子类, 如 `grow` 仅存在 `grow` 和 `grow-0` 两个原子类, 分别表示 `flex-grow: 1;` 和 `flex-grow: 0;`
- 任意值须用 `[]` 包裹, 如 `w-[100px]`, 应注意 `w-100` 与 `w-[100px]` 并不等价
- 原子类中使用 `theme` 变量: `text-theme(primary.red)`, 须确保 `primary.red` 定义于 `theme` 中

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
