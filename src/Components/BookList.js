import React from 'react'

const BookList = ({ books, loading, favoriteBooks, setFavoriteBooks, setBookLinks }) => {

  const addFavorite = book => {
    if (!favoriteBooks.some(alredyFavorite => alredyFavorite.id === book.id)) {
      setFavoriteBooks([...favoriteBooks, book])
    }
  }

  const getBookLink = book => {
    setBookLinks(book.resources)
  }

  if(!loading){
    return (
      <ul>
        {books.results.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong>
            by
            <i>{book.agents[0].person}</i>
            <button onClick={() => getBookLink(book)}>Read me</button>
            <button onClick={() => addFavorite(book)}>#</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default BookList