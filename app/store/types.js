// @flow

import buildUrl from 'router/buildUrl'
import type {Action as CUAction} from 'store/domains/currentUser'
import type {Action as MSAction} from 'store/domains/myShop'

export type Action = CUAction | MSAction

type ThunkContext<Act> = {
  dispatch: Dispatch<Act>,
}

export type Thunk<Act, Result> = (c: ThunkContext<Act>) => Result

export type Dispatch<A> = (<R>(a: Thunk<A, R>) => R) & ((a: A) => void)
export type GlobalDispatch = Dispatch<Action>
