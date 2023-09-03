import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import CopyToClipboarad from "./CopyToClipboarad";

const ContactInfo = () => {
  const theme = useTheme();
  const { contrastText } = theme.palette.primary;

  const contactInfo = [
    {
      icon: <AiOutlineMail color={contrastText} />,
      data: "a4abhiram125@gmail.com",
    },
    {
      icon: <BsTelephone color={contrastText} />,
      data: "+916301236321",
    },
  ];
  return (
    <>
      {contactInfo.map((contact, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>{contact.icon}</IconButton>
          <Typography variant="h6" color={contrastText}>
            {contact.data}
          </Typography>
          <CopyToClipboarad text={contact.data} />
        </Box>
      ))}
    </>
  );
};

export default ContactInfo;
