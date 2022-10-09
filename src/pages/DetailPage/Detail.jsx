import styled from "styled-components";
import DetailMain from "./components/DetailMain";

function DetailPage({ selectedBook }) {
  return (
    <StyledDetailPage>
      <h1>InstaBook</h1>
      <DetailMain selectedBook={selectedBook} />
    </StyledDetailPage>
  );
}

const StyledDetailPage = styled.div`
  margin: 0 2rem;
  width: 80vw;
  h1 {
    font-weight: lighter;
    font-family: khand;
    font-size: 64px;
  }
`;
export default DetailPage;
