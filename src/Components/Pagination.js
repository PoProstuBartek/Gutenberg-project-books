import { Button, Typography } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react'

const Pagination = ({ page, setPage, books, setLoading, setBooksUrl, booksUrl}) => {

  const handlePrev = () => {
    if(!books.previous){
      setBooksUrl(booksUrl)
    } else {
      page === 1 
      ? setPage(1)
      : setPage(page = page - 1)
        setBooksUrl(books.previous)
        setLoading(true)
    }
  }
  
  const handleNext = () => {
    if(!books.next){
      setBooksUrl(booksUrl)
    } else {
      setPage(page = page +1)
      setBooksUrl(books.next)
      setLoading(true)
    }
  }

  return (
    <span className='buttonContainer'>
      <Button variant='outlined' onClick={handlePrev}><NavigateBeforeIcon /></Button>
      <Typography variant='h4'>Page {page}</Typography>
      <Button variant='outlined' onClick={handleNext}><NavigateNextIcon /></Button>
    </span>
  )
}

export default Pagination