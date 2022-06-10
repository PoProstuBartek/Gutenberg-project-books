import { Button, Link, List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'

const BookLinks = ({ bookLinks, setBookLinks }) => {

  const handleClose = () => {
    setBookLinks([]);
  }

  return (
    !bookLinks.length
    ? <></>
    :
    <Paper elevation={12} className='linksContainer'>
      <span style={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant='h4'>Find your book here:</Typography>
        <Button variant='outlined' onClick={handleClose}>X</Button>
      </span>
      <List>
        {bookLinks.map((book) => (
          <ListItem key={book.id}><Link href={book.uri}>{book.uri}</Link></ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default BookLinks