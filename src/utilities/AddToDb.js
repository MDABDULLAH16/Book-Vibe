const getStoreBook = () => {
  const isExits = localStorage.getItem("readList");
  if (isExits) {
    const storeBook = JSON.parse(isExits);
    return storeBook;
  } else {
    return [];
  }
};

const AddBookToDb = (id) => {
  const storedBook = getStoreBook();
  if (storedBook.includes(id)) {
    alert("this book already exist");
  } else {
    storedBook.push(id);
    const book = JSON.stringify(storedBook);
    localStorage.setItem("readList", book);
  }
};

export { AddBookToDb, getStoreBook };
