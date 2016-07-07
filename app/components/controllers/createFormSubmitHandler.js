// @flow

import type {GlobalDispatch} from 'store/types'

type Handler = (dispatch: GlobalDispatch) => Promise<mixed>

export default function foo(handler: Handler): void {}
