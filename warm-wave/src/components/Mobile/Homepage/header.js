"use client";

import { Box, Button, Typography } from "@mui/material";
import Spacer from "@/components/spacer";
import photoUrls from "@/utils/photo-urls";

export default function MobileHeader() {

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(" + photoUrls.headerMobile[0] + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "1em",
        }}
      >
        <Spacer height={150} />

        <Typography
          variant="h1"
          component="h1"
          align="center"
          fontWeight={500}
          color="primary"
          className="text-opacity-overlay-mobile-gpt"
        >
          Warm Wave Studio
        </Typography>

        <Spacer height={100} />

        <Typography variant="h3" component="h3" align="center" fontWeight={500}
          className="text-opacity-overlay-mobile-gpt">
          Your All-in-One Studio for Perfect Sound
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
    </>
  );
}
