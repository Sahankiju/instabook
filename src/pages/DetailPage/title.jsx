import styled from "styled-components";

function BookTitle({ selectedBook }) {
  return (
    <StyledTitle>
      <h1>{selectedBook.title}</h1>
    </StyledTitle>
  );
}
export default BookTitle;
const StyledTitle = styled.div`

    h1{
        font-size:64px;
        
    }
`