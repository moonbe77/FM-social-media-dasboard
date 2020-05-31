import React, { useContext } from "react";
import { ThemeContext } from "../theme-context";
import styled from "styled-components";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconYouTube from "../assets/images/icon-youtube.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

const CardWrapper = styled.div`
  background: ${(props) => {
    if (props.icon === "instagram") return props.theme.cardBorder.instagram;
    if (props.icon === "twitter") return props.theme.cardBorder.twitter;
    if (props.icon === "facebook") return props.theme.cardBorder.facebook;
    if (props.icon === "youTube") return props.theme.cardBorder.youTube;
  }};
  margin: 20px 20px;
  border-radius: 4px;
`;

const CardContainer = styled.section`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.cardBackground};
  text-align: center;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 200px;
  width: 230px;

  .cardHeader {
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      margin-right: 5px;
    }
  }

  .cardBody {
    color: ${(props) => props.theme.mainTextColor};
    font-size: 4em;
    font-weight: 700;
    display: flex;
    flex-direction: column;

    span {
      color: ${(props) => props.theme.textColor};
      font-size: 0.2em;
      font-weight: 300;
      letter-spacing: 5px;
      text-transform: uppercase;
    }
  }

  .cardFooter {
    color: ${(props) => props.theme.textColor};
    font-weight: 700;
    span {
    }
  }
`;

export default function Card(props) {
  const { icon, user, followers, trend } = props;
  const themeContext = useContext(ThemeContext);

  return (
    <CardWrapper theme={themeContext.theme} {...props}>
      <CardContainer theme={themeContext.theme}>
        <div className='cardHeader'>
          <img
            src={
              (icon === "facebook" && iconFacebook) ||
              (icon === "twitter" && iconTwitter) ||
              (icon === "youTube" && iconYouTube) ||
              (icon === "instagram" && iconInstagram)
            }
            alt={icon}
            title={user}
          />
          {user}
        </div>
        <div className='cardBody'>
          {followers} <span>Followers</span>
        </div>
        <div className='cardFooter'>{trend} Today</div>
      </CardContainer>
    </CardWrapper>
  );
}
