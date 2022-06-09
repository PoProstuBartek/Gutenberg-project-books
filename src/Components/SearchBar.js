import React from 'react'

const SearchBar = ({ setBooksUrl, searchString, setSearchString, setLoading }) => {

  const searchStringHandler = e => {
    setSearchString(e.target.value);
  }

  const buttonHandler = () =>{
    setLoading(true);
    setBooksUrl(`https://gnikdroy.pythonanywhere.com/api/book/?search=${searchString}`);
  }

  return (
    <div>
      <label>Find your book <input value={searchString} onChange={searchStringHandler}></input> <button onClick={buttonHandler}>Search</button></label>
    </div>
  )
}

export default SearchBar