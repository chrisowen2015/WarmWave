"use client";
import { Box, Button, Divider, IconButton, Typography, Link, SvgIcon, useTheme, createSvgIcon } from "@mui/material";
import Spacer from "../spacer";
import { Facebook, Instagram, Mail, Phone, YouTube } from "@mui/icons-material";

export default function Footer() {
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
        <Box sx={{ width: '100%', display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
        } }}>
            <Divider />
            <Spacer height={75} />
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box>
                    <Box sx={{ marginBottom: '1em' }}>
                        <Typography variant="h6" component="h6" sx={{ fontWeight: "bold" }}>
                            About
                        </Typography>
                    </Box>

                    <Typography variant="p" component="p">
                        <Link color="inherit" underline="hover" href="/#about">
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

                </Box>

                <Box>
                    <Box sx={{ marginBottom: '1em' }}>
                        <Typography variant="h6" component="h6" sx={{ fontWeight: "bold" }}>
                            Services
                        </Typography>
                    </Box>


                    <Typography variant="p" component="p">
                        <Link color="inherit" underline="hover" href="/services/#audio-recording">
                            Audio Recording
                        </Link>
                    </Typography>


                    <Typography variant="p" component="p">
                        <Link color="inherit" underline="hover" href="/services/#audio-mixing-mastering">
                            Audio Mixing & Mastering
                        </Link>
                    </Typography>


                    <Typography variant="p" component="p">
                        <Link color="inherit" underline="hover" href="/services/#mixing-mastering-lessons">
                            Mixing & Mastering Lessons
                        </Link>
                    </Typography>


                    <Typography variant="p" component="p">
                        <Link color="inherit" underline="hover" href="/services/#production-session-musicians">
                            Production Session Musicians
                        </Link>
                    </Typography>

                </Box>

                <Box>
                    <Box sx={{ marginBottom: '1em' }}>
                        <Typography variant="h6" component="h6" sx={{ fontWeight: "bold" }}>
                            Contact
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                        <Phone />
                        <Typography variant="b" component="b" sx={{ marginLeft: '10px' }}>
                            +1 666.666.6666
                        </Typography>
                    </Box>

                    <Spacer height={10} />

                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                        <Mail />
                        <Typography variant="b" component="b" sx={{ marginLeft: '10px' }}>
                            andrew@realemailaddress.com
                        </Typography>
                    </Box>

                    <Spacer height={10} />

                    <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton>
                            <YouTube />
                        </IconButton>
                        <IconButton href="https://www.instagram.com/warmwavestudio">
                            <Instagram />
                        </IconButton>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                        <IconButton>
                            <SpotifyIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Spacer height={75} />
        </Box>
    );
}