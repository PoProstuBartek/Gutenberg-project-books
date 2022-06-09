import React from 'react'

const Favorite = ({ favoriteBooks }) => {
  return (
    <div>
      <h2>Your favorite books:</h2>
      <ul>
        {!favoriteBooks.length
          ? <p>Add some!</p>
          : favoriteBooks.map((book) => (
            <li key={book.id}><strong>{book.title}</strong> by <i>{book.agents[0].person}</i></li>
          ))}
      </ul>
    </div>
  )
}

export default Favorite