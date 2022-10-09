import styled from "styled-components";
import BookCard from "./BookCard";
function BookCatalogue({ title, books }) {
  return (
    <StyledBookCatalogue>
      <h3>{title}</h3>
      <div className="books">
        {books?.map((book) => {
          return (
            <BookCard img={book.img} title={book.title} author={book.author} />
          );
        })}
      </div>
    </StyledBookCatalogue>
  );
}

const StyledBookCatalogue = styled.div`
  .books {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h3 {
    margin: 2rem 0;
  }
`;

export default BookCatalogue;
