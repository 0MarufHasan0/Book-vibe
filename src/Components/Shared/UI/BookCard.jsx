import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <div>
                     <Link to={`booksDetails/${book.bookId}`}
            
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 rounded-2xl"
          >
            
            {/* Image */}
            <figure className='p-5'>
              <img
                className='rounded-xl h-56  '
                src={book.image}
                alt={book.bookName}
              />
            </figure>

            {/* Content */}
            <div className="card-body pt-0">
              
              {/* Tags */}
              <div className="flex gap-2 justify-between flex-wrap mb-2">
                {book.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="badge bg-green-100 text-green-600 border-none px-3 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="card-title font-bold text-lg md:text-xl leading-snug">
                {book.bookName}
              </h2>

              {/* Author */}
              <p className='text-gray-500 text-sm md:text-base'>
                By {book.author}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center border-t border-dashed border-gray-300 pt-4 mt-3 text-sm md:text-base">
                
                <span className="font-medium text-gray-600">
                  {book.category}
                </span>

                <span className="flex items-center gap-1 font-semibold">
                  <CiStar className="text-lg" />
                  {book.rating}
                </span>

              </div>
            </div>
          </Link> 
        </div>
    );
};

export default BookCard;