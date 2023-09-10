'use client';
import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import Spacer from "../spacer";
import ContactForm from "../contact-form";

export default function Contact() {
    return (
        <Box id="contact">

            <Typography fontWeight={400} variant="h1" component="h1" align="center">
                Contact Us
            </Typography>

            <Spacer height={100} />

            <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center' }}>

                <Box sx={{ width: "50%", minWidth: '800px' }}>
                    <Paper sx={{ padding: '2em' }}>
                        <ContactForm />
                    </Paper>
                </Box>
            </Box>

            <Spacer height={50} />

            <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" sx={{ padding: "1em 2em 1em 2em" }}
                    to='#'
                    onClick={(e) => {
                        window.location.href = "mailto:chrisowen2015@gmail.com"
                        e.preventDefault();
                    }} >
                    Submit
                </Button>
            </Box>

        </Box>
    );
}