import React from 'react'

const BookList = ({ books, loading }) => {

  if(!loading){
    return (
      <ul>
        {books.results.map((book) => (
          <li key={book.id}>{book.title} by {book.agents[0].person}</li>
        ))}
      </ul>
    )
  }
}

export default BookList