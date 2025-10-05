import React from "react";
import { useLoaderData } from "react-router";
import Container from "./../../Components/Container/Container";

const BookDetails = () => {
  const singleBook = useLoaderData();
  console.log(singleBook);

  const {
    author,
    // bookId,
    totalPages,
    yearOfPublishing,
    bookName,
    category,
    image,
    tags,
    rating,
    publisher,
    review,
  } = singleBook;

  if (!singleBook) {
    return <h1>Book not found</h1>;
  }

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-6 justify-between my-14">
        <div className=" bg-[#1313130D] p-[74px] rounded-2xl">
          <img
            className="min-w-[425px] min-h-[564px]"
            src={image}
            alt={bookName}
          />
        </div>
        <div className=" h-full">
          <h1 className="font-bold text-[40px]">{bookName}</h1>
          <p className="font-work font-medium lg:mt-4  text-xl ">
            By: {author}
          </p>
          <div className="lg:py-4  py-2">
            <hr className=" text-[#13131326] " />
          </div>
          <p className="font-work font-medium text-xl">{category}</p>
          <div className=" py-2 lg:py-4">
            <hr className=" text-[#13131326] " />
          </div>
          <p className="font-work font-bold">
            Review:{" "}
            <span className="font-normal text-[#131313B2]">{review}</span>
          </p>{" "}
          <div className="flex items-center gap-2 mt-4 lg:mt-6">
            <p>Tags</p>
            <p>
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-outline badge-primary text-[#23BE0A] font-work  ml-2 "
                >
                  {tag}
                </div>
              ))}
            </p>
          </div>
          <div className=" lg:py-4 py-2">
            <hr className=" text-[#13131326] " />
          </div>
          <div className="flex items-center ">
            <div className="space-y-3 ">
              <p className="text-[#131313B2]">Number of Pages: </p>
              <p className="text-[#131313B2]">Publisher: </p>
              <p>Year of Publishing:</p>
              <p>Ratings: </p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-black ml-10">{totalPages}</p>

              <p className="font-semibold text-black ml-10">{publisher}</p>

              <p className="font-semibold text-black ml-10">
                {" "}
                {yearOfPublishing}
              </p>
              <p className="font-semibold text-black ml-10"> {rating}</p>
            </div>
          </div>
          <div className="mt-8 space-x-4">
            <button className="btn border border-[#1313134D] bg-white ">
              Read
            </button>
            <button className="btn bg-[#50B1C9] text-white ">WishList</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookDetails;
