import Spacer from "@/components/spacer";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

export default function Team() {

    const team = [
        {
            name: "Andrew Tyler",
            title: "Founder, Senior Mixing & Mastering Engineer",
            imgSrc: "/images/andrew-tyler-cropped.jpg",
            alt: "Andrew Tyler Image",
            description: "Andrew Tyler hits bags and hits women."
        },
    ];

    return (
        <Box>
            <Spacer height={200} />

            <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
                Our Team
            </Typography>

            <Spacer height={50} />

            <Paper sx={{ padding: '2em', margin: '2em' }}>
                {
                    team.map((teamMember, index) => (

                        <div id={teamMember.name} key={teamMember.name}>
                            <Box sx={{ display: 'flex', padding: "2em 0 2em 0" }}>
                                <Image src={teamMember.imgSrc} width={600} height={450} alt={teamMember.alt} />
                                <Box sx={{ marginLeft: '2em' }}>
                                    <Typography variant="h4" component="h4">
                                        {teamMember.name}
                                    </Typography>
                                    <Spacer height={10} />

                                    <Typography variant="h5" component="h5">
                                        {teamMember.title}
                                    </Typography>

                                    <Spacer height={35} />

                                    <Typography variant="p" component="p">
                                        {teamMember.description}
                                    </Typography>
                                </Box>
                            </Box>

                            {
                                index !== team.length - 1 && <Divider />
                            }
                        </div>
                    ))
                }
            </Paper>


            <Spacer height={50} />
        </Box>
    )
}