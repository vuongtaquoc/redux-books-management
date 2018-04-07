const SUFFIXS = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

function ajax(action, prefix = '', sep = '/') {
  return {
    [`${action}_${SUFFIXS.REQUEST}`]: `${prefix}${sep}${action}_${SUFFIXS.REQUEST}`,
    [`${action}_${SUFFIXS.SUCCESS}`]: `${prefix}${sep}${action}_${SUFFIXS.SUCCESS}`,
    [`${action}_${SUFFIXS.FAILURE}`]: `${prefix}${sep}${action}_${SUFFIXS.FAILURE}`
  }
}

export const BOOK = {
  ...ajax('CREATE', 'book'),
  ...ajax('FETCH', 'book'),
  ...ajax('FETCH_ALL', 'book'),
  ...ajax('UPDATE', 'book'),
  ...ajax('REMOVE', 'book'),
}

export function createBook(book) {
  return {
    type: BOOK.CREATE_REQUEST,
    payload: book
  }
}

export function fetchBook(id) {
  return {
    type: BOOK.FETCH_REQUEST,
    payload: id
  }
}

export function fetchBooks() {
  return {
    type: BOOK.FETCH_ALL_REQUEST
  }
}

export function removeBook(book) {
  return {
    type: BOOK.REMOVE_REQUEST,
    payload: book
  }
} 

export function updateBook(book) {
  return {
    type: BOOK.UPDATE_REQUEST,
    payload: book
  }
}