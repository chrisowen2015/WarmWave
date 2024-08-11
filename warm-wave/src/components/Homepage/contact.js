"use client";
import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import Spacer from "../spacer";
import ContactFormContainer from "../contact-form-container";

export default function Contact() {
  return (
    <Box id="contact">
      <Typography fontWeight={400} variant="h1" component="h1" align="center">
        Contact Us
      </Typography>

      <Spacer height={40} />

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "50%", minWidth: "800px" }}>
          <ContactFormContainer />
        </Box>
      </Box>

      <Spacer height={30} />
    </Box>
  );
}
