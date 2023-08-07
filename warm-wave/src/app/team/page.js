import Spacer from "@/components/spacer";
import { Box, Typography } from "@mui/material";

export default function Team() {
    return (
        <Box>
            <Spacer height={150} />
            
            <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
                Our Team
            </Typography>

            <Spacer height={50}/> 
        </Box>
    )
}