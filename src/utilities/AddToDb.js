import { toast } from "react-toastify";

const getStoreBook = (list) => {
  const isExits = localStorage.getItem(list);
  if (isExits) {
    const storeBook = JSON.parse(isExits);
    return storeBook;
  } else {
    return [];
  }
};

const AddBookToDb = (list, id) => {
  const storedBook = getStoreBook(list);
  if (storedBook.includes(id)) {
    toast.error("This Book already added");
    return;
  } else {
    storedBook.push(id);
    const book = JSON.stringify(storedBook);
    localStorage.setItem(list, book);
  }
};

export { AddBookToDb, getStoreBook };
