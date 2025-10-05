import React from "react";
import { useLoaderData } from "react-router";
import BookCard from "../../Components/BookCard/BookCard";
import Container from "../../Components/Container/Container";

const Books = () => {
  const booksData = useLoaderData();
  console.log(booksData);

  return (
    <Container>
      <div>
        <h1 className="text-4xl font-bold text-center">Books</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mx-auto  lg:grid-cols-3 my-10">
          {booksData.map((book) => (
            <BookCard key={book.bookId} book={book}></BookCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Books;
