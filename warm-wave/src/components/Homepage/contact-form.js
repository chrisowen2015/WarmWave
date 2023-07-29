// Will need to be made a client component once functionality is added 

import { Box, Button, TextField, Typography } from "@mui/material";
import Spacer from "../spacer";

export default function ContactForm() {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField label="First Name" variant="outlined" sx={{ width: "49%" }} />
                <TextField label="Last Name" variant="outlined" sx={{ width: "49%" }} />
            </Box>

            <div style={{paddingTop: "1em"}}>
                <TextField label="Email Address" fullWidth variant="outlined" />
            </div>

            <div style={{paddingTop: "1em"}}>
                <TextField label="Subject" fullWidth variant="outlined" />
            </div>

            <div style={{paddingTop: "1em"}}> 
                <TextField label="Message" fullWidth variant="outlined" minRows={6} multiline />
            </div>
        </Box>
    );
}