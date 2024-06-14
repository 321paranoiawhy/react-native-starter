## TODO

- 如何使用类似 `UnoCSS` 的 [Attributify](https://unocss.dev/presets/attributify) 类名属性化写法
- 自定义 `Debug` 工具, 类似微信小程序的 `v-console`
- 集成 `iconify`

## tailwind

- `1rem` 对应 `16px`

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

### 颜色 `text-color`

- `text-white` 纯白色文字 `color: rgb(255 255 255);`
- `text-black` 纯黑色文字 `color: rgb(0 0 0);`
- `text-transparent` 透明文字 `color: transparent;`
- 设置透明度
  - `text-blue-600/75` 透明度 `0.75`
  - `text-blue-600/[.06]` 透明度 `0.06`
- 任意值
  - `text-[#50d71e]` <=> `color: #50d71e;`

### 字体

#### 字体大小 `font-size`

- `text-2xl` <=> `font-size: 1.5rem;` (`24px`), 同时设定 `line-height: 2rem;` (`32px`)
- `text-4xl` <=> `font-size: 2.25rem;` (`36px`), 同时设定 `line-height: 2.5rem;` (`40px`)
- 任意值
  - `text-[14px]` <=> `font-size: 14px;`
  - `text-[14px]/[20px]` <=> `font-size: 14px; line-height: 20px;`

本项目常用:

- `text-2xl/[43px]` <=> `font-size: 1.5rem; line-height: 43px;`

#### 字重 `font-weight`

- `font-light` <=> `font-weight: 300;`
- `font-normal` <=> `font-weight: 400;`
- `font-medium` <=> `font-weight: 500;`
- `font-semibold` <=> `font-weight: 600;`
- `font-bold` <=> `font-weight: 700;`

#### 字体颜色 `color`
