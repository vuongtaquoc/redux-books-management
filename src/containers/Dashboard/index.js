import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import { fetchBooks, removeBook } from '../../actions/book'

import Books from '../../components/books'

class Dashboard extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchBooks())
  }

  render() {
    const { books } = this.props

    return <Books 
      books={books} 
      onProcessRemoveBook={this._processRemoveBook()}
      onProcessPageChange={this._processPageChange()} />
  }

  _processRemoveBook() {
    return (book) => {
      const { dispatch } = this.props

      dispatch(removeBook(book))
    }
  }

  _processPageChange() {
    return (data) => {
      console.log(data)
    }
  }
}

const selector = state => ({
  books: state.book.books || [],
  isUpdated: state.book.isUpdated
})

export default connect(selector)(Dashboard)