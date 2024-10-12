import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Spacer from "@/components/spacer";
import photoUrls from "@/utils/photo-urls";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const options = { next: { revalidate: 60 } };

const GEAR_QUERY = groq`*[_type == "page" && name == "Gear"]{
  name,
  "imageUrl": image.asset->url,
  "mobileImageUrl": mobileImage.asset->url,
  gear[] -> {
    groupName,
    list,
    order
  }
}[0]`;

export default async function Page() {
  const gear = await client.fetch(GEAR_QUERY, {}, options);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
      >
        <Spacer height={130} />
      </Box>

      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <Spacer height={85} />
      </Box>

      <Typography variant="h1" fontWeight={400} component="h1" align="center">
        {gear.name}
      </Typography>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
      >
        <Spacer height={30} />
      </Box>

      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <Spacer height={10} />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", borderRadius: "30px" }}
      >
        <Paper
          sx={{
            width: "80%",
            backgroundImage: "url(" + photoUrls.gear[0] + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "30px",
          }}
        >
          <Box
            sx={{
              padding: "2em",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 1000,
              borderRadius: "30px",
              margin: 0,
            }}
          >
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
              <Spacer height={50} />
            </Box>
            <Grid container spacing={2} sx={{ marginTop: 0 }}>
              {gear.gear
                .sort((a, b) => a.order - b.order)
                .map((group, index) => (
                  <Grid item md={4} xs={12} key={index}>
                    <Typography
                      variant="h4"
                      component="h4"
                      sx={{ textAlign: "center" }}
                    >
                      {group.groupName}
                    </Typography>
                    <Spacer height={25} />
                    {group.list.map((item, index) => (
                      <Typography
                        variant="p"
                        component="p"
                        key={index}
                        sx={{ textAlign: "center" }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Grid>
                ))}
              <Grid item md={4} xs={12}></Grid>
            </Grid>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                },
              }}
            >
              <Spacer height={50} />
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
        }}
      >
        <Spacer height={30} />
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <Spacer height={20} />
      </Box>
    </Box>
  );
}
