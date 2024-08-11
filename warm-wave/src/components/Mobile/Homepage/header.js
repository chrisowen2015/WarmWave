"use client";

import { Box, Button, Typography, Stack, IconButton } from "@mui/material";
import Spacer from "@/components/spacer";
import photoUrls from "@/utils/photo-urls";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function MobileHeader() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  function nextPhoto(forward) {
    if (forward == true) {
      if (currentPhotoIndex == photoUrls.headerMobile.length - 1) {
        setCurrentPhotoIndex(0);
      } else {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      }
    } else if (forward == false) {
      if (currentPhotoIndex == 0) {
        setCurrentPhotoIndex(photoUrls.headerMobile.length - 1);
      } else {
        setCurrentPhotoIndex(currentPhotoIndex - 1);
      }
    }
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(" + photoUrls.headerMobile[currentPhotoIndex] + ")",
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
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))",
              borderRadius: "15px",
              padding: "10px 0px",
            }}
          >
            Warm Wave Studio
          </Typography>
        </Box>

        <Spacer height={100} />

        <Typography variant="h3" component="h3" align="center" fontWeight={500}>
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

      <Box sx={{ width: "100%", marginTop: "2em" }}>
        <Stack direction={"row"} justifyContent={"center"}>
          <IconButton onClick={() => nextPhoto(false)}>
            <ArrowBack />
          </IconButton>
          <Typography component={"b"} variant={"b"}>
            {currentPhotoIndex}
          </Typography>
          <IconButton onClick={() => nextPhoto(true)}>
            <ArrowForward />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
}
