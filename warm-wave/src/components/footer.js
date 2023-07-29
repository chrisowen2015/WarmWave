"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Spacer from "./spacer";
import { Facebook, Instagram, Phone, YouTube } from "@mui/icons-material";

export default function Footer() {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box>
                    <Box sx={{ marginBottom: '1em' }}>
                        <Typography variant="h6" component="h6" sx={{fontWeight:"bold"}}>
                            About
                        </Typography>
                    </Box>

                    <Typography variant="p" component="p">
                        About Us
                    </Typography>
                    <Typography variant="p" component="p">
                        Gallery
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ marginBottom: '1em' }}>
                        <Typography variant="h6" component="h6" sx={{fontWeight:"bold"}}>
                            Services
                        </Typography>
                    </Box>


                </Box>

                <Box>
                    <Box sx={{ marginBottom: '1em' }}>
                        <Typography variant="h6" component="h6" sx={{fontWeight:"bold"}}>
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
            <Spacer height={150} />
        </Box>
    );
}