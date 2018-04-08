import React from 'react'
import { Link } from 'react-router-dom'

import BookList from './List'
import Pagination from '../Pagination'

import { list } from './style'

class Books extends React.Component {
  render() {
    const { books, onProcessRemoveBook, onProcessPageChange } = this.props

    return (
      <div>
        <h1 style={list.title}>List books</h1>
        <Link to="/books/add" style={list.buttonAdd}>Add book</Link>
        <BookList books={books} onProcessRemoveBook={onProcessRemoveBook} />
        <div style={list.pagination}>
          <Pagination 
            pageCount={10}
            onProcessPageChange={onProcessPageChange}
          />
        </div>
      </div>
    )
  }
}

export default Books