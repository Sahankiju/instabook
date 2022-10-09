import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import BookStore from "../BookStore/BookStore";
import DetailPage from "../DetailPage/Detail";
import Main from "./components/Main";

function Home() {
  const [selectedBook, setSelectedBook] = useState();
  console.table(selectedBook);
  return (
    <StyledHome>
      <Navbar />
      {/* <Main /> */}
      {
       !selectedBook? <BookStore
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />:<DetailPage selectedBook={selectedBook}/>
      }
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  height: 100vh;
`;

export default Home;
