"use client";

import { Box, Button, Divider, IconButton, Typography, Link, SvgIcon, useTheme, createSvgIcon } from "@mui/material";
import Spacer from "@/components/spacer";
import { Facebook, Instagram, Mail, Phone, Spa, YouTube } from "@mui/icons-material";
import styles from '@/styles/mobileFooter.module.css'

export default function MobileFooter() {

    const SpotifyIcon = createSvgIcon(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
        >
            <path fill="black" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" />
        </svg>
    )

    return (
        <>
            <Box sx={{
                display: {
                    xs: 'block',
                    sm: 'block',
                    md: 'none',
                    lg: 'none',
                    xl: 'none',
                },
            }}>

                <Divider />

                <Box sx={{ display: 'block', padding: '2em' }}>
                    <Box sx={{ marginBottom: '1em' }}>
                        <Typography variant="h6" component="h6" fontWeight='bold' >
                            <Link color="inherit" underline="hover" href="/" >
                                Home
                            </Link>
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: '1em' }}>
                        <Box sx={{ marginBottom: '.5em' }}>
                            <Typography variant="h6" component="h6" fontWeight='bold' >
                                About
                            </Typography>
                        </Box>

                        <Typography variant="p" component="p">
                            <Link color="inherit" underline="hover" href="/#about" >
                                About Us
                            </Link>
                        </Typography>

                        <Typography variant="p" component="p">
                            <Link color="inherit" underline="hover" href="/#gallery">
                                Gallery
                            </Link>
                        </Typography>


                        <Typography variant="p" component="p">
                            <Link color="inherit" underline="hover" href="/#team">
                                Our Team
                            </Link>
                        </Typography>

                        <Typography variant="p" component="p">
                            <Link color="inherit" underline="hover" href="/services">
                                Our Services
                            </Link>
                        </Typography>
                    </Box>
                </Box>

                <Divider />

                <Box sx={{ display: 'block', padding: '2em' }}>

                    <Box>
                        <Box className={styles.contactRow}>
                            <Typography variant="h6" component="h6" fontWeight='bold' >
                                Contact
                            </Typography>
                        </Box>

                        <Spacer height={'1em'} />

                        <Box className={styles.contactRow}>
                            <Phone fontSize="large" />
                            <Typography variant="b" component="b" sx={{ marginLeft: '10px' }}>
                                +1 666.666.6666
                            </Typography>
                        </Box>

                        <Spacer height={10} />

                        <Box className={styles.contactRow}>
                            <Mail fontSize="large" />
                            <Typography variant="b" component="b" sx={{ marginLeft: '10px' }}>
                                andrew@realemailaddress.com
                            </Typography>
                        </Box>

                        <Box className={styles.socials}>
                            <IconButton>
                                <YouTube fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <Instagram fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <Facebook fontSize="large" />
                            </IconButton>
                            <IconButton>
                                <SpotifyIcon fontSize="large" />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Spacer height={'1em'} />
                <Box>

                </Box>

            </Box>
        </>
    )
}

