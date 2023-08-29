import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineMail } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

const ContactInfo = () => {
  const [copyEmail, setCopyEmail] = useState(false);
  const [copyPhoneNumber, setCopyPhoneNumber] = useState(false);
  const theme = useTheme();
  const handleCopyEmail = () => {
    setCopyEmail(true);
    setCopyPhoneNumber(false);
  };
  const handleCopyPhoneNumber = () => {
    setCopyPhoneNumber(true);
    setCopyEmail(false);
  };
  const contactInfo = [
    {
      icon: <AiOutlineMail color={theme.palette.primary.contrastText} />,
      data: "a4abhiram125@gmail.com",
      eventHandleMethod: handleCopyEmail,
      state: copyEmail,
    },
    {
      icon: <BsTelephone color={theme.palette.primary.contrastText} />,
      data: "+916301236321",
      eventHandleMethod: handleCopyPhoneNumber,
      state: copyPhoneNumber,
    },
  ];
  return (
    <>
      {contactInfo.map((contact) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>{contact.icon}</IconButton>
          <Typography variant="h6" color={theme.palette.primary.contrastText}>
            {contact.data}
          </Typography>
          <CopyToClipboard
            text={contact.data}
            onCopy={contact.eventHandleMethod}
          >
            <Tooltip
              title={contact.state ? "copied!" : "copy"}
              arrow
              enterTouchDelay={0}
            >
              <IconButton>
                <BiCopy color={theme.palette.primary.contrastText} />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
        </Box>
      ))}
    </>
  );
};

export default ContactInfo;
