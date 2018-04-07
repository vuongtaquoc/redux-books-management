import React from 'react'
import { Link } from 'react-router-dom'

import { list } from './style'

class BookItem extends React.Component {
  render() {
    const { book, onProcessRemoveBook } = this.props

    return (
      <tr>
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
  }
}

export default BookItem