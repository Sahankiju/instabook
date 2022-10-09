import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import BookCatalogue from "./BookCatalogue";
import Quote from "../Quote";
import { trendingBooks } from "../../../data/bookList";

function Main() {
  return (
    <StyledMain>
      <h1>Instabook</h1>
      <Carousel wrapAround={true} slidesToShow={1} autoplay>
        <Quote
          quoteText={
            '" If you don’t like to read, you haven’t found the right book  "'
          }
          quoteAuthor={"J k Rowling"}
        />
        <Quote
          quoteText={
            "That's the thing about books.They let you travel without moving your feet"
          }
          quoteAuthor={"Jhumpa lahiri"}
        />
        <Quote
          quoteText={
            "If There's A Book That You Want To Read, But It Hasn't Been Written Yet, Then You Must Write It"
          }
          quoteAuthor={"Toni Morison"}
        />
      </Carousel>
      <BookCatalogue />
      <BookCatalogue title={"Trending Books"} books={trendingBooks} />
      {/* <BookCatalogue title={"Recent books"} /> */}
    </StyledMain>
  );
}

const StyledMain = styled.div`
  width: 80%;
  height: 100%;
  overflow: scroll;
  padding: 0 3rem;
  h1 {
    font-weight: lighter;
    font-family: khand;
    font-size: 64px;
  }
  .quote1 {
    background-color: #000;
    color: #fff;
    flex: 29;
    font-family: khand;
    font-size: 24px;
    display: flex;
  }
`;

export default Main;
