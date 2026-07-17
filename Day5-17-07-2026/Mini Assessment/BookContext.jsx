import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        const library = data.map(book => ({
          id: book.id,
          title: book.title,
          read: false
        }));

        setBooks(library);
      });
  }, []);

  const addBook = (title) => {
    setBooks([
      ...books,
      {
        id: Date.now(),
        title,
        read: false
      }
    ]);
  };

  const markAsRead = (id) => {
    setBooks(
      books.map(book =>
        book.id === id
          ? { ...book, read: true }
          : book
      )
    );
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        markAsRead
      }}
    >
      {children}
    </BookContext.Provider>
  );
}