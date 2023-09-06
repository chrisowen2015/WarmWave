import Spacer from "@/components/spacer";
import TeamPanel from "@/components/team-panel";
import MobileTeamPanel from "@/components/Mobile/mobile-team-panel";
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";

export default function Team() {

    const team = [
        {
            name: "Andrew Tyler",
            title: "Founder, Senior Mixing & Mastering Engineer",
            imgSrc: "/images/team/andrew-tyler-cropped-1.jpeg",
            alt: "Andrew Tyler Image",
            description: "Andrew Tyler embarked on his journey in the music world as a musician and songwriter, based in a modest Santa Barbara apartment back in 2015. Recognizing his growing affinity for the technical aspects of music, he delved into the realms of mixing and mastering. Over time, he has collaborated with artists spanning the globe, utilizing his expertise to aid them in reaching their musical aspirations."
        },
        {

            name: "Chris Owen",
            title: "Website Developer, Brand Developer",
            imgSrc: "/images/team/chris-owen.jpg",
            alt: "Chris Owen Image",
            description: "Chris Owen is a web developer and brand developer based in Pasadena, California. He has worked with a variety of clients, from small businesses to large corporations, to help them achieve their goals. He is passionate about helping others and is always looking for new ways to do so."
        }
    ];

    return (
        <>
            <Box sx={{
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                    xl: 'block',
                }
            }}>
                <Spacer height={200} />

                <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
                    Our Team
                </Typography>

                <Spacer height={50} />

                <TeamPanel team={team} />

                <Spacer height={50} />
            </Box>
            <Box sx={{
                display: {
                    xs: 'block',
                    sm: 'block',
                    md: 'none',
                    lg: 'none',
                    xl: 'none',
                }
            }}>
                <Spacer height={100} />

                <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
                    Our Team
                </Typography>

                <Spacer height={25} />

                <MobileTeamPanel team={team} />

                <Spacer height={50} />
            </Box>
        </>
    )
}