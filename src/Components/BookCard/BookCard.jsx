import React from "react";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router";
//  bookId bookName category image
//  tags
// publisher rating review

const BookCard = ({ book }) => {
  const { author, bookId, bookName, category, image, tags, rating } = book;

  return (
    <Link to={`/bookDetails/:${bookId}`}>
      <div className="card bg-base-100 w-full shadow-sm p-6">
        <figure className="bg-[#F3F3F3] rounded-2xl">
          <img className="h-[166px] py-6" src={image} alt="Book image" />
        </figure>

        <div className="">
          {" "}
          <div className="card-actions">
            {tags.map((tag) => (
              <div className="badge badge-outline badge-primary text-[#23BE0A] font-work mt-4 lg:mt-6 ">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title my-1 lg:my-4">{bookName}</h2>
          <p className="font-work font-medium">By: {author}</p>
        </div>
        <div>
          <hr className="border-dashed text-[#13131326] my-2 lg:my-4" />
        </div>
        <div className="flex justify-between items-center ">
          <p className="font-work font-medium">{category}</p>
          <div className="flex items-center gap-2 justify-center">
            <p className="mb-1">{rating}</p>
            <IoIosStar className="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
