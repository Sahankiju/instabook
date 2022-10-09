import styled from "styled-components";

function Navbar({ setSelectedMenu, setSelectedBook }) {
  return (
    <StyledNavbar>
      <div className="menu">
        <h4
          onClick={() => {
            setSelectedMenu("Home");
            setSelectedBook(null);
          }}
        >
          Home
        </h4>
        <h4
          onClick={() => {
            setSelectedMenu("BookStore");
            setSelectedBook(null);
          }}
        >
          Book Store
        </h4>
        <h4
          onClick={() => {
            setSelectedMenu("Home");
          }}
        >
          About us
        </h4>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  background-color: #141313;
  color: #fff;
  flex: 1;
  font-family: khand;
  font-size: 24px;
  .bookstore {
    margin-top: 10rem;
  }
  .menu {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    h4 {
      padding: 0 1rem;
      border: 1px solid #141313;
      &:hover {
        cursor: pointer;
        border: 1px solid white;
      }
    }
  }
`;

export default Navbar;
