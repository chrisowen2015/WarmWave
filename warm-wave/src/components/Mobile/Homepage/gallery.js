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
import Spacer from "@/components/spacer";

import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import photoUrls from "@/utils/photo-urls";

export default function MobileGallery({ name, images }) {
  const theme = useTheme();
  return (
    <Box id="gallery-mobile">
      <Typography variant="h1" component="h1" align="center" fontWeight={400}>
        {name}
      </Typography>
      <Spacer height={20} />
      <Box>
        <Carousel
          navButtonsAlwaysVisible
          animation="fade"
          indicatorContainerProps={{
            style: {
              marginTop: "20px",
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
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={720}
                    height={720}
                  />
                </Paper>
              ))}
        </Carousel>
      </Box>
    </Box>
  );
}
