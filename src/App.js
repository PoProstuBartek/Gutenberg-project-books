import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import BookList from './Components/BookList';
import Pagination from './Components/Pagination';

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

  return (
    <div className='App'>
      { loading
        ? <p>Loading Books</p>
        : <div>
            <h1>Books to read:</h1>
            <BookList books={books} loading={loading}/>
            <Pagination page={page} setPage={setPage} books={books} setLoading={setLoading} setBooksUrl={setBooksUrl}/>
          </div>
      }
    </div>
  );
}

export default App;
