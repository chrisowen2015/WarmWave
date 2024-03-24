"use client";

import Spacer from "../spacer";
import { Box, Paper, Typography } from "@mui/material";
import Link from "@mui/material/Link";

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
          backgroundImage: "url(/images/Andrew-Beach-Guitar-2.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minWidth: "1024px",
        }}
      >
        <Spacer height={200} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            sx={{
              width: "60%",
              backgroundColor: "rgba(0, 0, 0, 0.55)",
              padding: "2em",
            }}
          >
            <Typography
              variant="p"
              component="p"
              align="center"
              sx={{ fontSize: 18 }}
            >
              Welcome to Warm Wave Studio, a leading hi-fi recording, mixing,
              and mastering studio, founded by the visionary Andrew Tyler in
              2016. With a rich history of nurturing hundreds of songs, we are
              dedicated to providing artists with comprehensive support, ranging
              from songwriting and production to recording, mixing, and
              mastering. Our expertise spans across an eclectic range of genres,
              including indie rock, EDM, and rap, as we tirelessly pursue the
              goal of delivering the most refined and distinctive sound for our
              artists.
            </Typography>

            <Spacer height={10} />

            <Typography
              variant="p"
              component="p"
              align="center"
              sx={{ fontSize: 18 }}
            >
              At Warm Wave Studio, we are driven by our passion for music and
              our commitment to excellence. Our team of skilled professionals is
              dedicated to honing the artistic vision of our clients and
              elevating their creations to new heights. With state-of-the-art
              equipment and a creative environment, we ensure that every aspect
              of the production process is meticulously executed.
            </Typography>

            <Spacer height={10} />

            <Typography
              variant="p"
              component="p"
              align="center"
              sx={{ fontSize: 18 }}
            >
              Join us at Warm Wave Studio and embark on a journey of artistic
              growth and musical transcendence. Experience the power of
              innovation and creativity as we collaborate to bring your vision
              to life with precision and artistry. Your music deserves the
              warmth of our studio, and we are here to make your dreams a
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
                <Link color="inherit" underline="hover" href="#contact">
                  Elevate your sound. Experience Warm Wave Studio.
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Spacer height={200} />
      </Box>
    </div>
  );
}
