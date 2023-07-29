"use client";
import { Box, Button, Divider, IconButton, Typography, Link } from "@mui/material";
import Spacer from "./spacer";
import { Facebook, Instagram, Phone, YouTube } from "@mui/icons-material";


export default function Footer() {
    return (
        <Box sx={{ width: '100%' }}>
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
                        <Link color="inherit" underline="hover" href="/services/#mixing-mastering-lessons">
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

                    <Box sx={{ display: 'flex', alignItems: 'center', height: '40px', }}>
                        <Phone />
                        <Typography variant="b" component="b" sx={{ marginLeft: '10px' }}>
                            +1 666.666.6666
                        </Typography>
                    </Box>
                    <Typography variant="p" component="p">
                        andrew@realemailaddress.com
                    </Typography>
                    <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-evenly' }}>
                        <IconButton>
                            <YouTube />
                        </IconButton>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                        {/* Spotify Icon, not a Material Icon */}
                    </Box>
                </Box>
            </Box>
            <Spacer height={75} />
        </Box>
    );
}