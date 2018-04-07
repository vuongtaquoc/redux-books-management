import { BOOK } from '../actions/book'

const initialState = {
  isUpdated: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case BOOK.FETCH_ALL_SUCCESS:
      return {
        ...state,
        books: action.payload,
        isUpdated: false
      }
    case BOOK.FETCH_SUCCESS:
      return {
        ...state,
        book: {
          ...action.payload
        },
        isUpdated: false
      }
    case BOOK.CREATE_SUCCESS:
    case BOOK.UPDATE_SUCCESS:
      return {
        ...state,
        book: {
          ...action.payload
        },
        isUpdated: true
      }
    case BOOK.REMOVE_SUCCESS:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload.id),
        isUpdated: true
      }
  }
  
  return {
    ...state,
    isUpdated: false
  }
}