"use client";
import Spacer from "../spacer";
import { Box, Paper, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import MuiPortableText from "../mui-portable-text";
import { PortableText } from "next-sanity";

export default function About({ name, imageUrl, text, tagline }) {
  return (
    <div id="about">
      <Typography fontWeight={400} variant="h1" component="h1" align="center">
        {name}
      </Typography>

      <Spacer height={30} />
      {imageUrl && (
        <Box
          sx={{
            width: "100%",
            backgroundImage: "url(" + imageUrl + ")",
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
            <Box
              className="text-opacity-overlay-mobile-gpt"
              sx={{
                width: "60%",
                padding: "2em",
              }}
            >
              {/* <PortableText value={text} /> */}
              <MuiPortableText text={text} isBold={true} />

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
                    {tagline}
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>

          <Spacer height={250} />
        </Box>
      )}
    </div>
  );
}
