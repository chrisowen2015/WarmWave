"use client";

import Spacer from "@/components/spacer";
import { Box, Paper, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import photoUrls from "@/utils/photo-urls";

export default function MobileAbout() {
  return (
    <div id="about-mobile">
      <Typography variant="h1" component="h1" align="center" fontWeight={400}>
        About Us
      </Typography>

      <Spacer height={20} />

      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(" + photoUrls.aboutMobile[0] + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Spacer height={75} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
          className="text-opacity-overlay-mobile-gpt"
            sx={{
              width: "90%",
              padding: "1em",
            }}
          >
            <Typography
              variant="p"
              component="p"
              align="center"
              sx={{ fontSize: 16.5, fontWeight: 500 }}
            >
              Welcome to Warm Wave Studio, founded by Andrew Tyler in 2016. We
              specialize in hi-fi recording, mixing, and mastering, catering to
              a diverse range of genres including indie rock, EDM, and rap.
            </Typography>

            <Spacer height={15} />

            <Typography
              variant="p"
              component="p"
              align="center"
              sx={{ fontSize: 16.5, fontWeight: 500 }}
            >
              Our dedicated team ensures meticulous execution of every aspect of
              the production process, driven by our passion for music and
              commitment to excellence. Join us on a journey of artistic growth
              and musical transcendence, where innovation and creativity bring
              your vision to life with precision and artistry. Your music
              deserves the warmth of our studio, and we're here to make your
              dreams a reality.
            </Typography>

            <Spacer height={15} />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="b"
                component="b"
                align="center"
                color="primary"
                sx={{ fontSize: 18 }}
              >
                <Link color="inherit" underline="hover" href="#contact-mobile">
                  Elevate your sound. Experience Warm Wave Studio.
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Spacer height={75} />
      </Box>
    </div>
  );
}
