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
  const [readListBook, setReadListBook] = useState([]);

  useEffect(() => {
    const getStoredBook = getStoreBook();
    const filterBookData = bookData.filter((book) =>
      getStoredBook.includes(book.bookId)
    );
    setReadListBook(filterBookData);
  }, []);

  return (
    <Container>
      <div className="my-9">
        <div className="bg-[#1313130D] rounded-2xl text-center">
          <h1 className="text-3xl font-bold font-work py-8">Books</h1>
        </div>
        <div className="flex justify-center items-center mt-8 ">
          <button className="flex text-white text-center items-center gap-2 btn bg-[#23BE0A]">
            Sort By <BiDownArrowAlt />{" "}
          </button>
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
