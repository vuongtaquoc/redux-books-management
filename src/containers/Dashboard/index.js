import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { fetchBooks, removeBook } from '../../actions/book'

import BookList from '../../components/books/List'

class Dashboard extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchBooks())
  }

  render() {
    const { books } = this.props;

    return <BookList 
      books={books} 
      onProcessRemoveBook={this._processRemoveBook()} />
  }

  _processRemoveBook() {
    return (book) => {
      const { dispatch } = this.props;

      dispatch(removeBook(book))
    }
  }
}

const selector = state => ({
  books: state.book.books || [],
  isUpdated: state.book.isUpdated
})

export default connect(selector)(Dashboard)