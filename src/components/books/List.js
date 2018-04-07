import React from 'react'
import { Link } from 'react-router-dom'

import BookItem from './Item'

import { list } from './style'

class BookList extends React.Component {
  render() {
    const { books, onProcessRemoveBook } = this.props

    return (
      <div>
        <h1 style={list.title}>List books</h1>
        <Link to="/books/add" style={list.buttonAdd}>Add book</Link>
        <table style={list.table}>
          <thead>
            <tr>
              <th style={list.column}>ID</th>
              <th style={list.column}>Image</th>
              <th style={list.column}>Title</th>
              <th style={list.column}>Author</th>
              <th style={list.column}>Price</th>
              <th style={list.column}>ISBN</th>
              <th style={list.column}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return <BookItem 
                book={book} 
                key={index} 
                onProcessRemoveBook={onProcessRemoveBook} />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default BookList