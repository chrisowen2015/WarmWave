"use client";

import React from "react";
import {
  Box,
  Paper,
  MobileStepper,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import Spacer from "../spacer";

import Carousel from "react-material-ui-carousel";
import Image from "next/image";

export default function Gallery({ name, images }) {
  const theme = useTheme();
  return (
    <Box id="gallery">
      <Typography fontWeight={400} variant="h1" component="h1" align="center">
        {name}
      </Typography>
      <Spacer height={30} />
      <Box sx={{ minHeight: 720 }}>
        <Carousel
          navButtonsAlwaysVisible
          animation="fade"
          indicatorContainerProps={{
            style: {
              marginTop: "30px",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.main,
            },
          }}
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              color: theme.palette.primary.main,
            },
          }}
        >
          {images &&
            images
              .sort((a, b) => a.order - b.order)
              .map((image, index) => (
                <Paper
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.alt}
                    width={1080}
                    height={720}
                  />
                </Paper>
              ))}
        </Carousel>
      </Box>
    </Box>
  );
}
