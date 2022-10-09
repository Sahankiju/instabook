import { useState } from "react";
import styled from "styled-components";
import { bookList } from "../../data/bookList";
import BookCard from "../Home/components/BookCard";

const BookStore = ({ selectedBook, setSelectedBook }) => {
  const [bookChip, setbookChip] = useState("AllBooks");
  return (
    <StyledBookStore>
      <div className="chipsList">
        <div
          className="chips"
          onClick={() => {
            setbookChip("AllBooks");
          }}
        >
          <h5>All Books</h5>
        </div>
        <div className="chips" onClick={() => {}}>
          <h5>Novel</h5>
        </div>
        <div className="chips">
          <h5>Biography</h5>
        </div>
        <div className="chips">
          <h5>Programming</h5>
        </div>
        <div className="chips">
          <h5>Self Help</h5>
        </div>
        <div className="chips">
          <h5>Poetry</h5>
        </div>
      </div>
      <div className="booksList">
        {bookList.map((book, key) => {
          return (
            <div
              key={key}
              onClick={() => {
                setSelectedBook(book);
              }}
            >
              <BookCard
                title={book.title}
                author={book.author}
                img={book.img}
                onCick
              />
            </div>
          );
        })}
      </div>
    </StyledBookStore>
  );
};

const StyledBookStore = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  .chipsList {
    display: flex;
    flex: 1;
    align-items: center;
    .chips {
      background-color: #ffd1d1;
      border: 1px solid #ffd1d1;
      padding: 0.5rem 1.5rem;
      margin: 0rem 1rem;
      border-radius: 1rem;
      &:hover {
        cursor: pointer;
        border: 1px solid blue;
      }
    }
  }

  .booksList {
    flex: 9;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 90vh;
    overflow: scroll;
  }
`;

export default BookStore;
