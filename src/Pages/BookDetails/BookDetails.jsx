import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { CiStar } from 'react-icons/ci';

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId: bookParamsId } = useParams();

  const expectedBook = books.find(
    book => book.bookId === Number(bookParamsId)
  );

  if (!expectedBook) {
    return <div className="text-center mt-10 text-lg md:text-xl">Book not found...</div>;
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing
  } = expectedBook;

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="bg-base-100 shadow-xl rounded-3xl p-5 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-10">
        
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center items-start">
          <img
            className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover shadow-lg hover:scale-105 transition duration-300"
            src={image}
            alt={bookName}
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 flex flex-col">
          
          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            {bookName}
          </h1>

          {/* Author */}
          <p className="text-gray-500 mt-1 text-sm sm:text-base md:text-base lg:text-lg">
            By {author}
          </p>

          {/* Category */}
          <p className="mt-2 text-green-600 font-semibold text-sm sm:text-base">
            {category}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-green-100 text-green-600 px-2 py-1 text-xs sm:text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-base leading-relaxed">
            {review}
          </p>

          {/* Info */}
          <div className="mt-4 space-y-1 text-sm sm:text-base">
            <p><span className="font-semibold">Publisher:</span> {publisher}</p>
            <p><span className="font-semibold">Year:</span> {yearOfPublishing}</p>
            <p><span className="font-semibold">Pages:</span> {totalPages}</p>
          </div>

          {/* Bottom */}
          <div className="flex flex-wrap justify-between items-center mt-4 gap-3">
            
            {/* Rating */}
            <div className="flex items-center gap-1 sm:gap-2 text-base sm:text-lg font-semibold">
              <CiStar className="text-lg sm:text-xl" />
              {rating}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <button className="btn btn-outline btn-success text-sm sm:text-base">
                Wishlist
              </button>
              <button className="btn btn-success hover:scale-105 transition text-sm sm:text-base">
                Read Book
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BookDetails;