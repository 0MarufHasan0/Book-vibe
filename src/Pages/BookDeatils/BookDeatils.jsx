import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { CiStar } from 'react-icons/ci';

const BookDeatils = () => {
  const books = useLoaderData();
  const { bookId: bookParamsId } = useParams();

  const expectedBook = books.find(
    book => book.bookId === Number(bookParamsId)
  );

  // 🛑 safety
  if (!expectedBook) {
    return <div className="text-center mt-10 text-xl">Book not found...</div>;
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
    <div className="container mx-auto my-10 px-4">
      
      <div className="bg-base-100 shadow-xl rounded-3xl p-5 md:p-10 flex flex-col lg:flex-row gap-8">
        
        {/* 📸 Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover shadow-lg hover:scale-105 transition duration-300"
            src={image}
            alt={bookName}
          />
        </div>

        {/* 📖 Content */}
        <div className="lg:w-1/2 flex flex-col">
          
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            {bookName}
          </h1>

          {/* Author */}
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            By {author}
          </p>

          {/* Category */}
          <p className="mt-3 text-green-600 font-semibold">
            {category}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-green-100 text-green-600 px-3 py-2 border-none"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed">
            {review}
          </p>

          {/* Info */}
          <div className="mt-6 space-y-2 text-sm md:text-base">
            <p><span className="font-semibold">Publisher:</span> {publisher}</p>
            <p><span className="font-semibold">Year:</span> {yearOfPublishing}</p>
            <p><span className="font-semibold">Pages:</span> {totalPages}</p>
          </div>

          {/* Bottom */}
          <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
            
            {/* Rating */}
            <div className="flex items-center gap-2 text-lg font-semibold">
              <CiStar className="text-xl" />
              {rating}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="btn btn-outline btn-success">
                Wishlist
              </button>
              <button className="btn btn-success hover:scale-105 transition">
                Read Book
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookDeatils;