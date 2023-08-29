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
        pb: 2,
        pt: 2,
        pl: { xs: 1.5, sm: 5 },
        pr: { xs: 1.5, sm: 5 },
      }}
    >
      <Typography variant="h4" color={theme.palette.primary.contrastText}>
        Get in touch
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: { xs: "250x", sm: "400px", md: "500px", lg: "600px" },
            width: { xs: "250px", sm: "400px", md: "500px", lg: "600px" },
            mr: { xs: 0, sm: 0, md: 0, lg: 5, xl: 10 },
          }}
        >
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
            backgroundColor: theme.palette.secondary.light,
            p: { xs: 2, sm: 2 },
            borderRadius: 3,
          }}
        >
          <Typography variant="h6" color={theme.palette.primary.contrastText}>
            Feel free to reach out to me if you're looking for a developer, have
            a query, or simply want to connect.
          </Typography>

          <ContactInfo />
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.primary.contrastText}
              sx={{ mt: 3 }}
            >
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
