// @flow

import type {Thunk, Action as AnyAction} from 'store/types'

export type Action = {type: 'MY_SHOP_CREATED'}

export function createProduct(data: Object): Thunk<AnyAction, Promise<string>> {
  return ({loadContext}) => Promise.resolve('')
}
