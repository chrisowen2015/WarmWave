import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import Spacer from "@/components/spacer";
import ContactFormContainer from "@/components/contact-form-container";

export default function MobileContact() {
  return (
    <Box id="contact-mobile">
      <Typography variant="h1" component="h1" align="center" fontWeight={400}>
        Contact Us
      </Typography>

      <Spacer height={50} />

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "90%" }}>
          <ContactFormContainer />
        </Box>
      </Box>

      <Spacer height={35} />
    </Box>
  );
}
