import React from "react";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ReadBooks = ({ readListBook }) => {
  return (
    <div className="space-y-4 ">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-1">
        {readListBook.map((book) => (
          <ReadBookCard key={book.bookId} book={book}></ReadBookCard>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
