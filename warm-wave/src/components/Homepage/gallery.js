"use client";

import React from 'react';
import { Box, Paper, MobileStepper, Typography, Button, useTheme } from '@mui/material';
import Spacer from '../spacer';

import Carousel from 'react-material-ui-carousel'
import Image from 'next/image';

const images = [
    {
        label: "1",
        src: "/images/drums-resized.jpg",
    },
    {
        label: "2",
        src: "/images/foo-resized.jpg",
    },
    {
        label: "3",
        src: "/images/guitars-resized.jpg",
    },
];

export default function Gallery() {
    const theme = useTheme();
    return (
        <Box id="gallery">
            <Typography variant="h1" component="h1" align="center">
                Gallery
            </Typography>
            <Spacer height={60} />
            <Box>
                <Carousel navButtonsAlwaysVisible animation='fade'
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: theme.palette.primary.main,
                            backgroundColor: theme.palette.primary.main
                        }
                    }}
                    navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                        style: {
                            color: theme.palette.primary.main,
                        }
                    }} 
                >
                    {
                        images.map((image, index) => (
                            <Paper key={index} sx={{ display: 'flex', justifyContent: "center" }}>
                                <Image src={image.src} alt={image.label} width={720} height={720} />
                            </Paper>
                        ))
                    }
                </Carousel>
            </Box>
        </Box >
    );
}