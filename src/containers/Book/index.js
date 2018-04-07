import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { fetchBook, updateBook, createBook } from '../../actions/book'
import Form from '../../components/book/Form'

class Book extends React.Component {
  constructor(props) {
    super(props)
    
    const { match } = this.props
    const { action, bookId } = match.params

    this.state = {
      action,
      bookId
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    const { action, bookId } = this.state

    if (action === 'detail') {
      dispatch(fetchBook(bookId))
    }
  }

  render() {
    const { action } = this.state
    const { book, isUpdated } = this.props

    if (isUpdated) {
      return <Redirect to="/" />
    }
    
    if (action === 'detail' && !book) {
      return null
    }

    const initialValues = {
      ...book
    }

    return (
      <div>
        {this._renderPageTitle(action, book)}
        <Form 
          initialValues={initialValues}
          onSubmit={this._processSaveBook()}
        />
      </div>
    )
  }

  _renderPageTitle(action, book) {
    if (action === 'add') {
      return (
        <div>
          <h1>Create New Book</h1>
        </div>
      )
    }

    return (
      <div>
        <h1>{`Update Book [${book.title}]`}</h1>
      </div>
    )
  }

  _processSaveBook() {
    return (form) => {
      const { dispatch } = this.props
      const book = {
        ...form
      }
      
      if (book.id) {
        dispatch(updateBook(book))
      } else {
        dispatch(createBook(book))
      }
    }
  }
}

const selector = state => ({
  book: state.book.book || undefined,
  isUpdated: state.book.isUpdated
})

export default connect(selector)(Book)