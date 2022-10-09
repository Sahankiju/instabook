import React from "react";
import styled from "styled-components";
import BookImage from "./Image";
import Button from "../../../components/Button/Button"

const DetailMain = ({ selectedBook }) => {
  return (
    <StyledDetailMain>
      <div className="left">
        <BookImage selectedBook={selectedBook} />
      </div>
      <div className="right">
        <div className="title">
          <h1>{selectedBook.title}</h1>
        </div>
        <div className="Description">
          <p>{selectedBook.description}</p>
        </div>
        <a href={selectedBook.pdf} download>
          <Button title={"Download"}/>
        </a>
      </div>
    </StyledDetailMain>
  );
};

const StyledDetailMain = styled.div`
  display: flex;
  h1 {
    font-weight: lighter;
    font-family: khand;
    font-size: 64px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2rem 5rem;
    
  }
`;

export default DetailMain;
