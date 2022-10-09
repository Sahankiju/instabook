import React from "react";
import styled from "styled-components";

function Quote({quoteText,quoteAuthor}) {
  return (
    <StyledQuote>
      <div className="quote1">
        <h1 className="text1">{quoteText}</h1>
        <p className="author1">-{quoteAuthor}</p>
      </div>
    </StyledQuote>
  );
}
const StyledQuote = styled.div`
  .quote1 {
    height: 35vh;
    background-color: #141313;
    margin-top: 4rem;

    .text1 {
      display: flex;
      font-size: 40px;
      align-items: center;
      margin-left: 9rem;
      font-weight: lighter;
    }
    .author1 {
      margin-top: 10rem;
    }
  }
`;
export default Quote;
