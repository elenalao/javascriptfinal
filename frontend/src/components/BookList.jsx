import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [refresh, setRefresh] = useState(new Date())
  
    useEffect(() => {
      axios
        .get('/')
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
          console.log(err)
        });
    }, [refresh]);

    const deleteBook = (id) => {
      axios
        .delete(`/${id}`)
        .then((response) => {
          setRefresh(new Date())
        });  
    };
  

    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books in the List</h2>
              <p className='text-center'>{books?.length || 0}</p>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create'
                className='btn btn-info float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{books && books.map((book, k) => 
            <BookCard book={book} key={k} deleteBook={deleteBook}/>)}</div>
        </div>
      </div>
    );
  }