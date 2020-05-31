import React, { useContext, useState } from "react";
import { ThemeContext } from "../theme-context";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Card from "./Card";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.foreground};
    font-family: 'Inter', sans-serif;
    font-size:14px;
  }
`;

const LayoutContainer = styled.main`
  padding: 15px;
  max-width: 1440px;
  margin: auto;
`;
const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-shrink: none;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default function Layout() {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  return (
    <>
      <GlobalStyle theme={themeContext.theme} />
      <LayoutContainer>
        <Header />
        <CardsContainer>
          <Card icon='facebook' user=' @nathanf' followers='1987' trend='12' />
          <Card icon='twitter' user='@nathanf' followers='1044' trend='99' />
          <Card
            icon='instagram'
            user='@realnathanf'
            followers='11k'
            trend='1099'
          />
          <Card icon='youTube' user='Nathan F.' followers='8239' trend='144' />
        </CardsContainer>
      </LayoutContainer>
    </>
  );
}
