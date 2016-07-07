// @flow

import {createProduct} from 'store/domains/myShop'
import createFormSubmitHandler from 'components/controllers/createFormSubmitHandler'
import type {GlobalDispatch} from 'store/types'

createFormSubmitHandler(dispatch => dispatch(createProduct({})))

export type OrderStatus = string
