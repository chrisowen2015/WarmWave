import Spacer from "@/components/spacer";
import TeamPanel from "@/components/team-panel";
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";

export default function Team() {

    const team = [
        {
            name: "Andrew Tyler",
            title: "Founder, Senior Mixing & Mastering Engineer",
            imgSrc: "/images/andrew-tyler-cropped.jpg",
            alt: "Andrew Tyler Image",
            description: "Andrew Tyler hits bags and hits women."
        },
        {

            name: "Chris Owen",
            title: "Website Developer, Brand Owner",
            imgSrc: "/images/chris-owen.png",
            alt: "Chris Owen Image",
            description: "Chris also likes to hit bags but is gentle with the ladies."
        }
    ];

    return (
        <Box>
            <Spacer height={200} />

            <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
                Our Team
            </Typography>

            <Spacer height={50} />

            <TeamPanel team={team}/>

            <Spacer height={50} />
        </Box>
    )
}