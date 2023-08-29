import { IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";

const Socials = () => {
  const theme = useTheme();
  const socialsData = [
    {
      icon: <BsGithub color={theme.palette.primary.contrastText} />,
      title: "Github",
      redirect: "https://github.com/Abhiram716",
    },
    {
      icon: <BsLinkedin color={theme.palette.primary.contrastText} />,
      title: "Linkedin",
      redirect: "https://www.linkedin.com/in/abhiram716",
    },
    {
      icon: <BsStackOverflow color={theme.palette.primary.contrastText} />,
      title: "Stackoverflow",
      redirect: "https://stackoverflow.com/users/15342341/abhi-ram",
    },
  ];

  return (
    <>
      {socialsData.map((social, index) => (
        <a
          key={index}
          href={social.redirect}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Tooltip title={social.title} arrow>
            <IconButton>{social.icon}</IconButton>
          </Tooltip>
        </a>
      ))}
    </>
  );
};

export default Socials;
