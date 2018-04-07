import { createStore, applyMiddleware } from 'redux'

import reducer from './reducer'
import book from '../middlewares/book'

const middlewares = [
  ...book
]

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
)

export default store