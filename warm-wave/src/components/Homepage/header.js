"use client";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Spacer from "../spacer";
import photoUrls from "@/utils/photo-urls";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Header() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  function nextPhoto(forward) {
    if (forward == true) {
      if (currentPhotoIndex == photoUrls.headerDesktop.length - 1) {
        setCurrentPhotoIndex(0);
      } else {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      }
    } else if (forward == false) {
      if (currentPhotoIndex == 0) {
        setCurrentPhotoIndex(photoUrls.headerDesktop.length - 1);
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
          backgroundImage: "url(" + photoUrls.headerDesktop[currentPhotoIndex] + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minWidth: "1024px",
          width: "100%",
        }}
      >
        <Spacer height={150} />

        <Box sx={{}}>
          <Typography
            fontWeight={500}
            variant="h1"
            component="h1"
            align="center"
            color="primary"
          >
            <span
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))",
                borderRadius: "15px",
                padding: "20px",
              }}
            >
              Warm Wave Studio
            </span>
          </Typography>
        </Box>

        <Spacer height={300} />

        <Typography fontWeight={500} variant="h3" component="h3" align="center">
          TYour All-in-One Studio for Perfect Sound
        </Typography>

        <Spacer height={100} />

        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            color="primary"
            href="contact"
            sx={{ padding: "1em 2em 1em 2em" }}
          >
            Contact Us to Book a Session
          </Button>
        </Box>

        <Spacer height={120} />
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
