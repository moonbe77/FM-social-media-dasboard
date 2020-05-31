import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../theme-context";

const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  margin-bottom: 30px;
`;
const HeaderTitle = styled.h1`
  font-size: 1.8em;
  margin: 0px;
`;
const Followers = styled.div`
  color: hsl(230, 22%, 74%);
  letter-spacing: 0.05em;
  color: hsl(230, 22%, 74%);
  border-bottom: 1px solid hsl(230, 22%, 54%);
  margin-bottom: 15px;
  padding-bottom: 15px;
  line-height: 25px;
`;

const ThemeSelector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: hsl(230, 22%, 74%);
`;

export default function Header() {
  const themeContext = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <HeaderTitle>Social Media Dashboard</HeaderTitle>
      <Followers>Total Followers: 23,004</Followers>
      <ThemeSelector>
        Dark Mode
        <button onClick={themeContext.handleThemeToggler}>dark mode</button>
      </ThemeSelector>
    </HeaderContainer>
  );
}
