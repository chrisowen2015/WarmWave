"use client";

import { Box, Button, Typography } from "@mui/material";
import Spacer from "@/components/spacer";

export default async function MobileHeader({ header }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(" + header.mobileImageUrl + ")",
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
          Warm Wave Records
        </Typography>

        <Spacer height={100} />

        <Typography
          variant="h3"
          component="h3"
          align="center"
          fontWeight={500}
          className="text-opacity-overlay-mobile-gpt"
        >
          {header.tagline}
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
