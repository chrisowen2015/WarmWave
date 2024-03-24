import { Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Spacer from "@/components/spacer";

export default function Page() {
  return (
    <>
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
        <Spacer height={150} />
        <Spacer height={50} />
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
        <Spacer height={100} />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h1"
          fontWeight={400}
          component="h1"
          sx={{ textAlign: "center" }}
        >
          Gear
        </Typography>
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
        <Spacer height={50} />
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
        <Spacer height={35} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          sx={{
            width: "80%",
            backgroundImage: "url(/images/gear.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              padding: "2em",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 1000,
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

            <Grid container spacing={2}>
              <Grid item md={4}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ textAlign: "center" }}
                >
                  AD/DA CONVERTERS
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="p"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  Lynx aurora(n) 16 <br />
                  Lynx Aurora 8 <br />
                  Universal Audio Apollo Duo <br />
                  (26 channels of AD/DA conversion)
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ textAlign: "center" }}
                >
                  COMPRESSION
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="p"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  Universal Audio 1176 FET Compressor <br />
                  Neve 33609 Diode Bridge Compressor <br />
                  DBX 160 vu (vintage) Compressor <br />
                  Empirical Labs Distressor VCA Compressor <br />
                  Neve Master Bus Processor VCA Compressor <br />
                  BetterMaker Darthlimiter <br />
                  Fab Filter Pro C <br />
                </Typography>

                <Spacer height={25} />
              </Grid>

              <Grid item md={4}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ textAlign: "center" }}
                >
                  SOFTWARE
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="p"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  Logic X <br />
                  Ableton 10 Suite <br />
                  Waves, Slate Digital, Soundtoys, Fab Filter, Ozone, Celemony,
                  and more <br />
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ textAlign: "center" }}
                >
                  EQUALIZATION
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="p"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  Tonelux Equalux <br />
                  Gyraf G13s <br />
                  FabFilter Pro Q <br />
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ textAlign: "center" }}
                >
                  MONITORING
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="p"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  Focal Solo 6 BE <br />
                  Yamaha Hs8 <br />
                </Typography>

                <Spacer height={25} />
              </Grid>

              <Grid item md={4}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ textAlign: "center" }}
                >
                  PREAMPS
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="p"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  Neve 1073 (2 pres) <br />
                  Sebatron VMP 4000e (4 pres) <br />
                  API 3124+ (4 pres) <br />
                  Daking Stereo (2 pres) <br />
                  UA Apollo Duo (2 pres) <br />
                  (14 pres) <br />
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ textAlign: "center" }}
                >
                  EFFECTS/MISC
                </Typography>

                <Spacer height={25} />

                <Typography
                  variant="p"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  All Soundtoys <br />
                  All Waves <br />
                  All Slate Digital <br />
                  Klark Teknik Stereo analog Chorus <br />
                  Roland Effects Unit (Delay/Reverb/Flanger/Chorus) <br />
                </Typography>

                <Spacer height={25} />
              </Grid>
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

      <Spacer height={50} />
    </>
  );
}
