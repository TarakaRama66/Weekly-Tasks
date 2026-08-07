import { useContext } from "react";
import { BookContext } from "./BookContext";

function Card({ book }) {

  const { markAsRead } = useContext(BookContext);

  return (
    <div>

      <h3>{book.title}</h3>

      <p>
        Status :
        {book.read ? " ✅ Read" : " ❌ Not Read"}
      </p>

      {!book.read && (
        <button
          onClick={() => markAsRead(book.id)}
        >
          Mark as Read
        </button>
      )}

      <hr />

    </div>
  );
}

export default Card;