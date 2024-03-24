import { Box, Button, Typography } from "@mui/material";
import Spacer from "@/components/spacer";

export default function MobileHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url(/images/Andrew-Desk-Better-2.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "1em",
      }}
    >
      <Spacer height={150} />

      <Box sx={{ display: "block", justifyContent: "center" }}>
        <Typography
          variant="h1"
          component="h1"
          align="center"
          fontWeight={500}
          color="textPrimary"
        >
          <span style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            Warm Wave Studio
          </span>
        </Typography>
      </Box>

      <Spacer height={100} />

      <Typography variant="h3" component="h3" align="center" fontWeight={500}>
        Mixing & Mastering with the Masters
      </Typography>

      <Spacer height={50} />

      <Box
        display="flex"
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          variant="contained"
          color="primary"
          href="#contact-mobile"
          sx={{ padding: "1em 2em 1em 2em" }}
        >
          Contact Us to Book a Session
        </Button>
      </Box>

      <Spacer height={50} />
    </Box>
  );
}
