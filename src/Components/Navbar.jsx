import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background: black;
  height: 70px;
`;
const Btn = styled.button`
  float: right;
  background: black;
  border: 1px solid blueviolet;
  box-shadow: 3px 2px 10px blueviolet;
  color: white;
  padding: 1rem;
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Link to="/signup"><Btn sty>SIGN UP</Btn></Link>
    </Nav>
  );
}
