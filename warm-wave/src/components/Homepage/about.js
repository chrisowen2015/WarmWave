
import Spacer from "../spacer";
import { Box, Paper, Typography } from "@mui/material";

export default function About() {
    return (
        <Box id="about" sx={{ width: "100%", backgroundImage: "url(/images/Andrew-Beach-Guitar-2.jpeg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", minWidth:"1024px", width: "100%" }}>
            <Spacer height={90} />

            <Typography variant="h1" component="h1" align="center">
                About Us
            </Typography>

            <Spacer height={50} />

            <Box sx={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Paper sx={{
                    width: "70%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "2em",
                }}>
                    <Typography variant="p" component="p" align="center">
                        Warm Wave Studios is a recording studio located in North Hollywood.
                        We offer a wide range of services including audio recording, mixing, mastering, and production. {/* TODO: Ask andrew about Production???? */}
                        We have a large selection of microphones, preamps, and instruments to choose from.
                        We also have a large selection of plugins and virtual instruments.
                        We are a one stop shop for all of your recording needs.
                    </Typography>

                    <Spacer height={10} />

                    <Typography variant="p" component="p" align="center">
                        From hitting bags to hitting drums, we have it all.
                    </Typography>

                    <Spacer height={10} />

                    <Typography variant="p" component="p" align="center">
                        To schedule a session or consultation, please get in touch with us here or our contact form below.
                    </Typography>

                </Paper>

            </Box>

            <Spacer height={150} />
        </Box>
    );
}