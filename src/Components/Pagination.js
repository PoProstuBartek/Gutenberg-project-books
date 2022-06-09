import React from 'react'

const Pagination = ({ page, setPage, books, setLoading, setBooksUrl}) => {

  const handlePrev = () => {
    page === 1 
      ? setPage(1)
      : setPage(page = page - 1)
        setBooksUrl(books.previous)
        setLoading(true)
  }
  
  const handleNext = () => {
    setPage(page = page +1)
    setBooksUrl(books.next)
    setLoading(true)
  }

  return (
    <span>
      <button onClick={handlePrev}>Prev</button>
      <h4>{page}</h4>
      <button onClick={handleNext}>Next</button>
    </span>
  )
}

export default Pagination