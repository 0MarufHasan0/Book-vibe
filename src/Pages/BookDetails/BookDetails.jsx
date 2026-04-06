import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find(
    (book) => book.bookId === Number(bookParamsId)
  );

  if (!expectedBook) {
    return (
      <div className="text-center mt-10 text-lg md:text-xl">
        Book not found...
      </div>
    );
  }

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-100 shadow-sm rounded-xl overflow-hidden">
        {/* Image */}
        <figure className="w-full flex items-center justify-center bg-gray-100">
          <img
            src={image}
            alt={bookName}
            className="w-full h-auto max-h-[400px] object-cover rounded-xl"
          />
        </figure>

        {/* Content */}
        <div className="card-body space-y-3 p-4 md:p-6">
          <h2 className="card-title text-xl sm:text-2xl md:text-3xl">{bookName}</h2>
          <h3 className="text-gray-600 text-sm sm:text-base">By: {author}</h3>
          <p className="py-2 border-y text-sm sm:text-base font-medium">{category}</p>
          <p className="text-sm sm:text-base leading-relaxed">Review: {review}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className="badge text-green-500 bg-green-100 font-bold text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Info */}
          <div className="border-t pt-3 space-y-2 text-sm sm:text-base">
            <div className="flex justify-between items-center">
              <span>Number of pages:</span>
              <span>{totalPages}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Publisher:</span>
              <span>{publisher}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Publish time:</span>
              <span>{yearOfPublishing}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="btn btn-sm sm:btn-md w-full sm:w-auto">Mark as Read</button>
              <button className="btn btn-primary btn-sm sm:btn-md w-full sm:w-auto">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;