import Spacer from "@/components/spacer";
import TeamPanel from "@/components/team-panel";
import MobileTeamPanel from "@/components/Mobile/mobile-team-panel";
import { Box, Typography } from "@mui/material";
import photoUrls from "@/utils/photo-urls";

export default function Team() {

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
          Our Team
        </Typography>

        <Spacer height={30} />

        <TeamPanel team={photoUrls.team} />

        <Spacer height={50} />
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
          Our Team
        </Typography>

        <Spacer height={20} />

        <MobileTeamPanel team={photoUrls.team} />

        <Spacer height={50} />
      </Box>
    </>
  );
}
