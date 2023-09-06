import { Box, Button, Typography } from "@mui/material";
import Spacer from "../spacer";

export default function Header() {
    return (
        <Box sx={{ width: "100%", backgroundImage: "url(/images/Andrew-Desk-Better-2.jpeg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", minWidth: "1024px", width: "100%" }}>
            <Spacer height={200} />

            <Box sx={{  backgroundColor: "rgba(0, 0, 0, 0.6)", }}>
                <Typography variant="h1" component="h1" align="center" color="primary" >
                    Warm Wave Studio
                </Typography>
            </Box>

            <Spacer height={300} />

            <Typography variant="h3" component="h3" align="center">
                Mixing & Mastering with the Masters
            </Typography>

            <Spacer height={100} />

            <Box display="flex" flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                <Button variant="contained" color="primary" href="#contact" sx={{ padding: "1em 2em 1em 2em" }}>
                    Contact Us to Book a Session
                </Button>
            </Box>

            <Spacer height={120} />
        </Box>
    );
}