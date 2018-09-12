/* @flow */


// 常需要借助如 webpack 的 vue-loader 工具把 .vue 文件编译成 JavaScript
// 因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，因此代码体积也会更轻量。
import Vue from './runtime/index'

export default Vue
