"use client";

import Spacer from "../spacer";
import { Box, Paper, Typography, Stack, IconButton } from "@mui/material";
import Link from "@mui/material/Link";
import photoUrls from "@/utils/photo-urls";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function About() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  function nextPhoto(forward) {
    if (forward == true) {
      if (currentPhotoIndex == photoUrls.length - 1) {
        setCurrentPhotoIndex(0);
      } else {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      }
    } else if (forward == false) {
      if (currentPhotoIndex == 0) {
        setCurrentPhotoIndex(photoUrls.length - 1);
      } else {
        setCurrentPhotoIndex(currentPhotoIndex - 1);
      }
    }
  }

  return (
    <div id="about">
      <Typography fontWeight={400} variant="h1" component="h1" align="center">
        About Us
      </Typography>

      <Spacer height={60} />

      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(" + photoUrls[currentPhotoIndex].url + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minWidth: "1024px",
        }}
      >
        <Spacer height={250} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              width: "60%",
              background:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))",
              borderRadius: "15px",
              padding: "2em",
            }}
          >
            <Typography
              variant="p"
              component="p"
              align="center"
              sx={{ fontSize: 18 }}
            >
              Welcome to Warm Wave Studio, founded by Andrew Tyler in 2016. We
              specialize in hi-fi recording, mixing, and mastering, catering to
              a diverse range of genres including indie rock, EDM, and rap. Our
              dedicated team ensures meticulous execution of every aspect of the
              production process, driven by our passion for music and commitment
              to excellence. Join us on a journey of artistic growth and musical
              transcendence, where innovation and creativity bring your vision
              to life with precision and artistry. Your music deserves the
              warmth of our studio, and we're here to make your dreams a
              reality.
            </Typography>

            <Spacer height={20} />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="b"
                component="b"
                align="center"
                color="primary"
                sx={{ fontSize: 18 }}
              >
                <Link color="inherit" underline="hover" href="contact">
                  Elevate your sound. Experience Warm Wave Studio.
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Spacer height={250} />
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
    </div>
  );
}
