const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 指定 tailwind 语法生效的文件
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js.jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    // aspect-ratio polyfill
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({addUtilities, matchUtilities, addComponents, e, config}) {
      // align with unocss c-white etc.
      addUtilities({
        // 注意, 须添加前缀 . (css class 选择器)
        // c0white -> color: white;
        '.c-white': {
          color: 'white'
        },
        '.c-black': {
          color: 'black'
        }
      });
      // matchUtilities(
      //   {
      //     // c-[red] -> color: red;
      //     // c-[#123456] -> color: #123456;
      //     c: value => ({
      //       color: value
      //     })
      //   }
      // );
    })
  ]
};
