import styled from "styled-components";

function Navbar() {
  return (
    <StyledNavbar>
      <div className="menu" >
        <a href="#" className="bookstore">bookstore</a>
        <a href="">author</a>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  background-color: #141313;
  color: #fff;
  flex: 1;
  font-family: khand;
  font-size:24px;

  a {
    text-decoration: none;
    color: #fff;
    margin-left: 3rem;
    margin-top: 1rem;
  }
  .bookstore{
        margin-top: 10rem;
    }
  .menu{
    display: flex;
    flex-direction: column;
  }
`;

export default Navbar;
