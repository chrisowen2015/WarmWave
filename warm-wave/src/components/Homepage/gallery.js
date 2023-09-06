"use client";

import React from 'react';
import { Box, Paper, MobileStepper, Typography, Button, useTheme } from '@mui/material';
import Spacer from '../spacer';

import Carousel from 'react-material-ui-carousel'
import Image from 'next/image';

const images = [
    {
        label: "1",
        src: "/images/gallery/guitars.jpeg",
    },
    {
        label: "2",
        src: "/images/gallery/gallery-desk.jpeg",
    },
    {
        label: "3",
        src: "/images/gallery/pianos.jpeg",
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
            <Box sx={{minHeight: 720}}>
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
                                <Image src={image.src} alt={image.label} width={1080} height={720} />
                            </Paper>
                        ))
                    }
                </Carousel>
            </Box>
        </Box >
    );
}