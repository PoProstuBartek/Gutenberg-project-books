import { List, ListItem, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Favorite = ({ favoriteBooks, getBookLink }) => {
  return (
    <Container>
      <Typography variant='h4'>Your favorite books:</Typography>
        <List>
          {!favoriteBooks.length
            ? <p>Add some!</p>
            : favoriteBooks.map((book) => (
              <ListItem key={book.id}>
                <Typography variant='h6'><strong>{book.title}</strong></Typography>
                <span style={{margin: 10}}>by</span>
                <Typography variant='h6'><i>{book.agents[0].person}</i></Typography>
                <Button style={{margin: 10}} variant='outlined' onClick={() => getBookLink(book)}>Read book</Button>
              </ListItem>
            ))}
        </List>
      </Container>
  )
}

export default Favorite