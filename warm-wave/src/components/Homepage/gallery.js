"use client";

import React from 'react';
import { Box, Paper, MobileStepper, Typography, Button } from '@mui/material';
import Spacer from '../spacer';

import Carousel from 'react-material-ui-carousel'
import Image from 'next/image';

const images = [
    {
        label: "1",
        src: "/images/IMG_7458.jpeg",
    },
    {
        label: "2",
        src: "/images/IMG_7462.jpeg",
    },
    {
        label: "3",
        src: "/images/IMG_7463.jpeg",
    },
];

export default function Gallery() {

    return (
        <Box id="gallery">
            <Typography variant="h1" component="h1" align="center">
                Gallery
            </Typography>
            <Spacer height={60} />
            <Box>
                <Carousel navButtonsAlwaysVisible>
                    {images.map((image, index) => (
                        <Paper key={index} sx={{display:'flex', justifyContent:"center"}}>
                            <Image src={image.src} alt={image.label} width={1024} height={2000} />
                        </Paper>
                    ))}
                </Carousel>
            </Box>
        </Box>
    );
}