// @flow

import type {Thunk} from 'store/types'

export type Action = {type: 'MY_SHOP_CREATED'}

export function createProduct(data: Object): Thunk<Action, Promise<string>> {
  return ({loadContext}) => Promise.resolve('')
}
