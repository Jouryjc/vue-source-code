/* @flow */

import { identity, resolveAsset } from 'core/util/index'

/**
 * Runtime helper for resolving filters
 */

 /**
  * 获取filter对象中对应id的函数
  * @param {String} id - 函数名
  * @returns {Function} - 函数名是id的函数
  */
export function resolveFilter (id: string): Function {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}
