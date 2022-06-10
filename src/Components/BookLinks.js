import React from 'react'

const BookLinks = ({ bookLinks }) => {
  return (
    !bookLinks.length
    ? <></>
    :
    <div>
      <h4>Read your book:</h4>
      <ul>
        {bookLinks.map((book) => (
          <li key={book.id}><a href={book.uri}>{book.uri}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default BookLinks