import React, { use } from 'react';
import { CiStar } from 'react-icons/ci';
import BookCard from '../UI/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className='my-12 container mx-auto px-4'>
      
      <h2 className='font-bold text-2xl md:text-3xl text-center mb-8'>
        Books
      </h2>

      {/* Responsive Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        
        {books.map(book => (
          <BookCard book={book} key={book.bookId}/>

        ))}

      </div>
    </div>
  );
};

export default AllBooks;