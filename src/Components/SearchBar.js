import { Button, TextField } from '@mui/material';
import React from 'react'

const SearchBar = ({ setBooksUrl, searchString, setSearchString, setLoading, setPage }) => {

  const searchStringHandler = e => {
    setSearchString(e.target.value);
  }

  const buttonHandler = () =>{
    setLoading(true);
    setBooksUrl(`https://gnikdroy.pythonanywhere.com/api/book/?search=${searchString}`);
    setSearchString('');
    setPage(1);
  }

  return (
    <div style={{width: 500, margin: 20}}>
      <TextField id="outlined-basic" label="Find your book" variant="outlined" value={searchString}  onChange={searchStringHandler} />
      <Button style={{margin: 10}} variant='outlined' onClick={buttonHandler}>Search</Button>
    </div>
  )
}

export default SearchBar