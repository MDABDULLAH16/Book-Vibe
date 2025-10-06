import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../../Components/Container/Container";
import ReadBooks from "../../Components/ReadBooks/ReadBooks";
import WishMarks from "../../Components/WishMarks/WishMarks";
import { BiDownArrow, BiDownArrowAlt } from "react-icons/bi";
import { useLoaderData } from "react-router";
import { getStoreBook } from "../../utilities/AddToDb";
const ListedBooks = () => {
  const bookData = useLoaderData();
  //   console.log(bookData);
  const [sort, setSort] = useState("");
  const [readListBook, setReadListBook] = useState([]);

  useEffect(() => {
    const getStoredBook = getStoreBook();
    const filterBookData = bookData.filter((book) =>
      getStoredBook.includes(book.bookId)
    );
    setReadListBook(filterBookData);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPages = [...readListBook].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadListBook(sortByPages);
    } else if (type === "ratings") {
      const sortByRatings = [...readListBook].sort(
        (a, b) => a.rating - b.rating
      );
      setReadListBook(sortByRatings);
    }
  };
  return (
    <Container>
      <div className="my-9">
        <div className="bg-[#1313130D] rounded-2xl text-center">
          <h1 className="text-3xl font-bold font-work py-8">Books</h1>
        </div>
        <div className="flex justify-center items-center mt-8 ">
          <details className="dropdown  text-black">
            <summary className="btn m-1 bg-[#23BE0A] text-white">
              Sort by {sort ? sort : ""}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a onClick={() => handleSort("pages")}>pages</a>
              </li>
              <li>
                <a onClick={() => handleSort("ratings")}>ratings</a>
              </li>
            </ul>
          </details>{" "}
        </div>
        <div className="mt-6">
          <Tabs>
            <TabList>
              <Tab>Read Books</Tab>
              <Tab>WishList Books</Tab>
            </TabList>

            <TabPanel>
              <ReadBooks readListBook={readListBook}></ReadBooks>
            </TabPanel>
            <TabPanel>
              <WishMarks></WishMarks>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default ListedBooks;
