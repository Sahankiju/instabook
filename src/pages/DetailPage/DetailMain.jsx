import React from "react";
import styled from "styled-components";
import BookImage from "./Image";
import BookTitle from "./title";

const DetailMain = ({ selectedBook }) => {
  return (
    <>
      <h1>InstaBook</h1>
      <StyledDetailMain>
        <div className="left">
          <BookImage selectedBook={selectedBook} />
        </div>
        <div className="right">
          <div className="title">
            <BookTitle selectedBook={selectedBook} />
          </div>
          <div className="Description">
            <p>{selectedBook.description}</p>
          </div>
          <a href={selectedBook.pdf} download>
            <button>download</button>
          </a>
        </div>
      </StyledDetailMain>
    </>
  );
};

const StyledDetailMain = styled.div`
  flex: 7;
  border: 1px solid red;
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  h1 {
    font-weight: lighter;
    font-family: khand;
    font-size: 64px;
  }
  .right .title {
    margin-left: 2rem;
  }
  .right .Description {
    width: 500px;
    margin-left: 2rem;
  }
  .right {
    margin-top: 7rem;
  }
`;

export default DetailMain;
