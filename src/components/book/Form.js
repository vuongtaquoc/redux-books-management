import React from 'react'
import { Field, reduxForm } from 'redux-form'

import style from './style'

class BookForm extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <div style={style.wrapper}>
        <form onSubmit={handleSubmit}>
          <div style={style.row}>
            <label style={style.label}>Title</label>
            <Field component="input" type="text" name="title" />
          </div>

          <div style={style.row}>
            <label style={style.label}>Author</label>
            <Field component="input" type="text" name="author" />
          </div>

          <div style={style.row}>
            <label style={style.label}>Price</label>
            <Field component="input" type="text" name="price" />
          </div>

          <div style={style.row}>
            <label style={style.label}>ISBN</label>
            <Field component="input" type="text" name="isbn" />
          </div>

          <div style={style.row}>
            <button style={style.button} type="submit">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'book'
})(BookForm)