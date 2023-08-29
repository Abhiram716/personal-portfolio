import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

import contact from "../../images/contact-section/contact.svg";
import PrimaryContainer from "../Container/PrimaryContainer";
import ContactInfo from "./ContactInfo";
import Socials from "./Socials";

const ContactSection = () => {
  const theme = useTheme();
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

          <ContactInfo />
          <Box>
            <Typography variant="h6" color={theme.palette.primary.contrastText}>
              you can also find me on these platforms!
            </Typography>
            <Socials />
          </Box>
        </Box>
      </Box>
    </PrimaryContainer>
  );
};

export default ContactSection;
