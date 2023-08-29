import React, { useState } from "react";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import {
  BsTelephone,
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
} from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";

import PrimaryContainer from "../Container/PrimaryContainer";
import contact from "../../images/contact-section/contact.svg";

const ContactSection = () => {
  const [copyEmail, setCopyEmail] = useState(false);
  const [copyPhoneNumber, setCopyPhoneNumber] = useState(false);
  const theme = useTheme();
  const email = "a4abhiram125@gmail.com";
  const phoneNumber = "+916301236321";
  const handleCopyEmail = () => {
    setCopyEmail(true);
    setCopyPhoneNumber(false);
  };
  const handleCopyPhoneNumber = () => {
    setCopyPhoneNumber(true);
    setCopyEmail(false);
  };

  return (
    <PrimaryContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pb: 5,
        pt: 5,
        pl: { xs: 1.5, sm: 5 },
        pr: { xs: 1.5, sm: 5 },
        mt: 5,
      }}
    >
      <Typography variant="h4" color={theme.palette.primary.contrastText}>
        Get in touch
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ height: "500px", width: "500px", mr: 10 }}>
          <img
            src={contact}
            alt="contact"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" color={theme.palette.primary.contrastText}>
            Feel free to reach out to me if you're looking for a developer, have
            a query, or simply want to connect.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <AiOutlineMail color={theme.palette.primary.contrastText} />
            </IconButton>

            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              {email}
            </Typography>
            <CopyToClipboard text={email} onCopy={handleCopyEmail}>
              <Tooltip title={copyEmail ? "copied!" : "copy"} arrow>
                <IconButton>
                  <BiCopy color={theme.palette.primary.contrastText} />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <BsTelephone color={theme.palette.primary.contrastText} />
            </IconButton>
            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              {phoneNumber}
            </Typography>
            <CopyToClipboard text={phoneNumber} onCopy={handleCopyPhoneNumber}>
              <Tooltip title={copyPhoneNumber ? "copied!" : "copy"} arrow>
                <IconButton>
                  <BiCopy color={theme.palette.primary.contrastText} />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </Box>

          <Box>
            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              you can also find me on these platforms!
            </Typography>
            <Box>
              <Tooltip title="Github" arrow>
                <IconButton>
                  <BsGithub color={theme.palette.primary.contrastText} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Linkedin" arrow>
                <IconButton>
                  <BsLinkedin color={theme.palette.primary.contrastText} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Stackoverflow" arrow>
                <IconButton>
                  <BsStackOverflow color={theme.palette.primary.contrastText} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </PrimaryContainer>
  );
};

export default ContactSection;
