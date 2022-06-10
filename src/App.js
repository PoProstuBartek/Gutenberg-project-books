import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import BookList from './Components/BookList';
import Pagination from './Components/Pagination';
import Favorite from './Components/Favorite';
import SearchBar from './Components/SearchBar';
import LanguageSelection from './Components/LanguageSelection';
import BookLinks from './Components/BookLinks';
import { CircularProgress, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';

function App() {

  let [booksUrl, setBooksUrl] = useState('https://gnikdroy.pythonanywhere.com/api/book/');

  useEffect(() => {
    const getBooks = async () => {
      const res = await axios.get(booksUrl);
      setLoading(false);
      setBooks(res.data);
    }
    getBooks();
  },[booksUrl]);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [language, setLanguage] = useState('');
  const [bookLinks, setBookLinks] = useState([]);

  const getBookLink = book => {
    setBookLinks(book.resources)
  }

  return (
    <Container>
      <Typography variant='h2'>Books to read: {books.count}</Typography>
      <span style={{display: "flex"}}>
        <SearchBar setBooksUrl={setBooksUrl} searchString={searchString} setSearchString={setSearchString} setLoading={setLoading} setPage={setPage}/>
        <LanguageSelection setBooksUrl={setBooksUrl} language={language} setLanguage={setLanguage} setLoading={setLoading}/>
      </span>
      { loading
        ? <span>
            <CircularProgress />
            <p>Loading Books</p>
         </span>   
        : <Paper elevation={3} style={{margin: 20}}>
            <BookList books={books} loading={loading} favoriteBooks={favoriteBooks} setFavoriteBooks={setFavoriteBooks} setBookLinks={setBookLinks} getBookLink={getBookLink}/>
            <Pagination page={page} setPage={setPage} books={books} setLoading={setLoading} setBooksUrl={setBooksUrl} booksUrl={booksUrl}/>
          </Paper>
      }
      <Favorite favoriteBooks={favoriteBooks} getBookLink={getBookLink} setFavoriteBooks={setFavoriteBooks}/>
      <BookLinks bookLinks={bookLinks} setBookLinks={setBookLinks}/>
    </Container>
  );
}

export default App;
