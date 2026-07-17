import { useContext } from "react";
import { BookContext } from "./BookContext";
import BookCard from "./Card";

function List() {

  const { books } = useContext(BookContext);

  return (
    <>
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}/>
      ))}
    </>
  );
}

export default List;