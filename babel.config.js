module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

// antd ---- 安装babel-plugin-import
// module.exports = {
//   presets: [
//     '@vue/app',
//   ],
//   plugins: [
//     [
//       "import", 
//       {
//         "libraryName": "ant-design-vue",
//         "libraryDirectory": "es",
//         "style": true
//       }
//     ]
//   ]
// }

// 移动端mintUI ---- 安装babel-plugin-component
// module.exports = {
//   presets: [
//     '@vue/app',
//   ],
//   plugins: [
//     [
//       "component", 
//       {
//         "libraryName": "mint-ui",
//         "libraryDirectory": "es",
//         "style": true
//       }
//     ]
//   ]
// }
