"use client";

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Spacer from "../spacer";

export default async function Header({ header }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(" + header.imageUrl + ")",
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
            <span className="text-opacity-overlay">Warm Wave Records</span>
          </Typography>
        </Box>

        <Spacer height={240} />

        <Typography fontWeight={500} variant="h3" component="h3" align="center">
          <span className="text-opacity-overlay">{header.tagline}</span>
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
    </>
  );
}
