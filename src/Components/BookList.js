import { Button, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const BookList = ({ books, loading, favoriteBooks, setFavoriteBooks, getBookLink}) => {

  const addFavorite = book => {
    if (!favoriteBooks.some(alredyFavorite => alredyFavorite.id === book.id)) {
      setFavoriteBooks([...favoriteBooks, book])
    }
  }

  if(!loading){
    return (
      <List>
        {books.results.map((book) => (
          <ListItem key={book.id}>
            <Typography variant='h6'><strong>{book.title}</strong></Typography>
            <span style={{margin: 10}}>by</span>
            <Typography variant='h6'><i>{book.agents[0].person}</i></Typography>
            <Button style={{margin: 10}} variant='outlined' onClick={() => getBookLink(book)}>Read book</Button>
            <Button variant='outlined' onClick={() => addFavorite(book)}>Add favorite</Button>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default BookList