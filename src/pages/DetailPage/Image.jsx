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
  img {
    width: 410px;
    height: 606px;
  }
`;
