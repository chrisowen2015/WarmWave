"use client";

import Spacer from "../spacer";
import { Box, Paper, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import photoUrls from "@/utils/photo-urls";

export default function About() {

  return (
    <div id="about">
      <Typography fontWeight={400} variant="h1" component="h1" align="center">
        About Us
      </Typography>

      <Spacer height={60} />

      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(" + photoUrls.aboutDesktop[0] + ")",
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
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5))",
              borderRadius: "15px",
              padding: "2em",
            }}
          >
            <Typography
              variant="p"
              component="p"
              align="center"
              sx={{ fontSize: 18, fontWeight: 500 }}
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
    </div>
  );
}
