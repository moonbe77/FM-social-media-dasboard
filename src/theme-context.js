import React from "react";

export const themes = {
  light: {
    foreground: " black",
    background: "hsl(0, 0%, 100%)",
    cardBackground: "hsl(227, 47%, 96%)",
    mainTextColor: "hsl(230, 17%, 14%)",
    textColor: "hsl(228, 12%, 44%)",
    cardBorder: {
      facebook: "#198FF5",
      twitter: "#1CA0F2",
      instagram:
        "linear-gradient(90deg, rgba(253,196,104,1) 0%, rgba(223,73,150,1) 100%)",
      youTube: "#C4032A"
    }
  },
  dark: {
    foreground: "white",
    background: "hsl(230, 17%, 14%)",
    topBackground: "hsl(232, 19%, 15%)",
    cardBackground: "hsl(228, 28%, 20%)",
    mainTextColor: "hsl(0, 0%, 100%)",
    textColor: " hsl(228, 34%, 66%)",
    cardBorder: {
      facebook: "#198FF5",
      twitter: "#1CA0F2",
      instagram:
        "linear-gradient(90deg, rgba(253,196,104,1) 0%, rgba(223,73,150,1) 100%)",
      youTube: "#C4032A"
    }
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
