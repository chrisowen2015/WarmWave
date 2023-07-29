import { Box, Button, Typography } from "@mui/material";
import Spacer from "../spacer";

export default function Header() {
    return (
        <Box sx={{ width: "100%", backgroundImage: "url(/images/desk.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", minWidth:"1024px", width: "100%" }}>
            <Spacer height={150} />

            <Typography variant="h1" component="h1" align="center">
                Warmer Wave Studios
            </Typography>

            <Spacer height={200} />

            <Typography variant="h3" component="h3" align="center">
                Poopin, Scoopin, and Loopin
            </Typography>

            <Spacer height={40} />

            <Box display="flex" flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                <Button variant="contained" color="primary" href="#contact" sx={{ padding: "1em 2em 1em 2em" }}>
                    Contact Us to Book a Session
                </Button>
            </Box>

            <Spacer height={60} />
        </Box>
    );
}