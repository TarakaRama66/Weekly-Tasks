import { useContext, useState } from "react";
import { BookContext } from "./BookContext";

function AddBook() {

  const [title, setTitle] = useState("");

  const { addBook } = useContext(BookContext);

  return (
    <>
      <input
        placeholder="Book Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={() => {
          addBook(title);
          setTitle("");
        }}
      >
        Add Book
      </button>
    </>
  );
}

export default AddBook;