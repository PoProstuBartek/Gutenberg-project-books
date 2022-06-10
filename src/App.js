import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import BookList from './Components/BookList';
import Pagination from './Components/Pagination';
import Favorite from './Components/Favorite';
import SearchBar from './Components/SearchBar';
import LanguageSelection from './Components/LanguageSelection';
import BookLinks from './Components/BookLinks';

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

  console.log(bookLinks);

  return (
    <div className='App'>
      <h1>Books to read: {books.count}</h1>
      <SearchBar setBooksUrl={setBooksUrl} searchString={searchString} setSearchString={setSearchString} setLoading={setLoading} setPage={setPage}/>
      <LanguageSelection setBooksUrl={setBooksUrl} language={language} setLanguage={setLanguage} setLoading={setLoading}/>
      { loading
        ? <p>Loading Books</p>
        : <div>
            <BookList books={books} loading={loading} favoriteBooks={favoriteBooks} setFavoriteBooks={setFavoriteBooks} setBookLinks={setBookLinks}/>
            <Pagination page={page} setPage={setPage} books={books} setLoading={setLoading} setBooksUrl={setBooksUrl} booksUrl={booksUrl}/>
          </div>
      }
      <Favorite favoriteBooks={favoriteBooks}/>
      <BookLinks bookLinks={bookLinks}/>
    </div>
  );
}

export default App;
