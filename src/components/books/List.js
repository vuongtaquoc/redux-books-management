import React from 'react'
import { Link } from 'react-router-dom'

import { list } from './style'

class BookList extends React.Component {
  render() {
    const { books, onProcessRemoveBook } = this.props

    return (
      <div>
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
              return (
                <tr key={index}>
                  <td style={list.column}>{book.id}</td>
                  <td style={list.column}><img src={book.imageUrl} alt={book.title} /></td>
                  <td style={list.column}>{book.title}</td>
                  <td style={list.column}>{book.author}</td>
                  <td style={list.column}>{book.price}</td>
                  <td style={list.column}>{book.isbn}</td>
                  <td style={list.column}>
                    <Link style={list.buttonEdit} to={`/books/detail/${book.id}`}>Edit</Link>
                    <a style={list.buttonDelete} onClick={() => onProcessRemoveBook(book)}>Delete</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default BookList