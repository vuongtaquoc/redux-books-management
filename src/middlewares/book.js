import { BOOK } from '../actions/book'
import { post, get, put, remove } from '../services/request'

export default [
  store => next => action => {
    next(action)

    switch (action.type) {
      case BOOK.FETCH_ALL_REQUEST:
        get('/books')
          .then(books => store.dispatch({
            type: BOOK.FETCH_ALL_SUCCESS,
            payload: books
          }))
          .catch(err => store.dispatch({
            type: BOOK.FETCH_ALL_FAILURE,
            reason: err
          }))
        break
      case BOOK.FETCH_REQUEST:
        get(`/books/${action.payload}`)
          .then(book => store.dispatch({
            type: BOOK.FETCH_SUCCESS,
            payload: book
          }))
          .catch(err => store.dispatch({
            type: BOOK.FETCH_FAILURE,
            reason: err
          }))
        break
      case BOOK.CREATE_REQUEST:
        post('/books', action.payload)
          .then(book => store.dispatch({
            type: BOOK.CREATE_SUCCESS,
            payload: book
          }))
          .catch(err => store.dispatch({
            type: BOOK.CREATE_FAILURE,
            reason: err
          }))
        break
      case BOOK.UPDATE_REQUEST:
        put(`/books/${action.payload.id}`, action.payload)
          .then(book => store.dispatch({
            type: BOOK.UPDATE_SUCCESS,
            payload: book
          }))
          .catch(err => store.dispatch({
            type: BOOK.UPDATE_FAILURE,
            reason: err
          }))
        break
      case BOOK.REMOVE_REQUEST:
        remove(`/books/${action.payload.id}`)
          .then(book => store.dispatch({
            type: BOOK.REMOVE_SUCCESS,
            payload: action.payload
          }))
          .catch(err => store.dispatch({
            type: BOOK.REMOVE_FAILURE,
            reason: err
          }))
        break
    }
  } 
]