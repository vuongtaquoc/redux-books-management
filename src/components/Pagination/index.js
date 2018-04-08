import React from 'react'
import ReactPaginate from 'react-paginate'

class Pagination extends React.Component {
  render() {
    const { onProcessPageChange, pageCount } = this.props

    return (
      <ReactPaginate 
        previousLabel="Prev"
        nextLabel="Next"
        breakLabel={<a>...</a>}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onProcessPageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    )
  }
}

export default Pagination