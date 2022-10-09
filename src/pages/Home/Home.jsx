import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import BookStore from "../BookStore/BookStore";
import DetailPage from "../DetailPage/Detail";
import Main from "./components/Main";

function Home() {
  const [selectedBook, setSelectedBook] = useState();
  const [selectedMenu, setSelectedMenu] = useState("Home");
  console.log(selectedMenu);
  return (
    <StyledHome>
      <Navbar
        setSelectedMenu={setSelectedMenu}
        setSelectedBook={setSelectedBook}
      />
      {selectedMenu === "Home" ? (
        <Main />
      ) : selectedMenu === "BookStore" ? (
        !selectedBook ? (
          <BookStore
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
          />
        ) : (
          <DetailPage selectedBook={selectedBook} />
        )
      ) : (
        <h1>Error</h1>
      )}
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  height: 100vh;
`;

export default Home;

{
}
