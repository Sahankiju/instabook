import styled from "styled-components";
function BookCard({ img, title, author }) {
  return (
    <StyledBookCard>
      <img src={img} alt="book cover" />

      <div>
        <h4>{title}</h4>
        <p>- {author}</p>
      </div>
    </StyledBookCard>
  );
}
const StyledBookCard = styled.div`
  display: flex;
  height: 150px;
  width: 300px;
  background-color: #fff;
  padding: 0.4rem 0.5rem;
  margin: 1rem 0.5rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  flex-grow: 5;
  &:hover{
    cursor: pointer;
  }
  img {
    margin-right: 0.4rem;
  }
  h4 {
    font-size: 20px;
  }
`;
export default BookCard;
