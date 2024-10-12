import Spacer from "@/components/spacer";
import TeamPanel from "@/components/team-panel";
import MobileTeamPanel from "@/components/Mobile/mobile-team-panel";
import { Box, Typography } from "@mui/material";
import photoUrls from "@/utils/photo-urls";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const options = { next: { revalidate: 60 } };

const TEAM_QUERY = groq`*[_type == "page" && name == "Our Team"]{
  name,
  team[] -> {
    name,
    text,
    role,
    "image": image.asset -> url,
    order
  }
}[0]`;

export default async function Team() {
  const team = await client.fetch(TEAM_QUERY, {}, options);

  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Spacer height={130} />

        <Typography
          fontWeight={400}
          variant="h1"
          component="h1"
          sx={{ textAlign: "center" }}
        >
          {team.name}
        </Typography>

        <Spacer height={30} />

        <TeamPanel team={team.team} />

        <Spacer height={30} />
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Spacer height={85} />

        <Typography
          variant="h1"
          component="h1"
          sx={{ textAlign: "center" }}
          fontWeight={400}
        >
          {team.name}
        </Typography>

        <Spacer height={20} />

        <MobileTeamPanel team={team.team} />

        <Spacer height={20} />
      </Box>
    </>
  );
}
