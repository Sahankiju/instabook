import styled from "styled-components";

function BookImage({ selectedBook }) {
  return (
    <StyledImg>
      <img src={selectedBook.img} alt="book cover page" />
    </StyledImg>
  );
}
export default BookImage;

const StyledImg = styled.div`
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);
  img {
    width: 410px;
    height: 606px;
    border: 1px solid black;
  }
`;
