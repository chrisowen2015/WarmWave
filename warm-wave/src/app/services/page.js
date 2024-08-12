import React from "react";
import {
  Box,
  Divider,
  Paper,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
} from "@mui/material";
import Spacer from "@/components/spacer";
import Image from "next/image";

import photoUrls from "@/utils/photo-urls";

export default function Services() {
  return (
    <>
      {/*
                    This is the Services page to be displayed on Desktop, and larger devices.
                */}
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
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h1"
            component="h1"
            fontWeight={400}
            sx={{ textAlign: "center" }}
          >
            Services
          </Typography>
        </Box>

        <Spacer height={30} />

        <Paper sx={{ padding: "2em", margin: "0 2em" }}>
          <Spacer height={10} />
          <Typography variant="h6" component="h6">
            Our services include high fidelity recording, mixing, and mastering.
            We provide comprehensive support to artists, from songcrafting to
            sound refinement across genres like indie rock, EDM, and rap. With a
            dedicated team, top-tier equipment, and an unwavering commitment to
            excellence, we strive to elevate your artistic vision to new
            heights. Explore our services below, and connect with us to bring
            your musical vision to life with our expertise and creativity.
          </Typography>

          <Spacer height={50} />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={6}>
              <Typography variant="h4" component="h4" align="center">
                Service Costs
              </Typography>

              <Spacer height={25} />

              <Typography variant="p" component="p" align="center">
                Our services are priced at $79 per hour and $600 per day.
              </Typography>

              <Spacer height={25} />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={8} xl={6}>
              <TableContainer component={Paper} elevation={4}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Service</TableCell>
                      <TableCell align="right">Hourly Cost&nbsp;($)</TableCell>
                      <TableCell align="right">Daily Cost&nbsp;($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {photoUrls.services.map((service) => (
                      <TableRow
                        key={service.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {service.title}
                        </TableCell>
                        <TableCell align="right">
                          {service.hourlyCost}
                        </TableCell>
                        <TableCell align="right">{service.dailyCost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          {photoUrls.services.map((service, index) => (
            <div id={service.id} key={service.id}>
              <Box sx={{ display: "flex", padding: "2em 0 2em 0" }}>
                <Image
                  src={service.imgSrc}
                  width={600}
                  height={450}
                  alt={service.alt}
                />
                <Box sx={{ marginLeft: "2em" }}>
                  <Typography variant="h4" component="h4">
                    {service.title}
                  </Typography>

                  <Spacer height={25} />

                  <Typography variant="p" component="p">
                    {service.description}
                  </Typography>

                  <Spacer height={150} />

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      href={"/contact?quote=" + service.id + "#contact"}
                      variant="contained"
                      fullWidth
                    >
                      Request a quote
                    </Button>
                  </div>
                </Box>
              </Box>

              {index !== photoUrls.services.length - 1 && <Divider />}
            </div>
          ))}
        </Paper>
        <Spacer height={30} />
      </Box>

      {/*
                    This is the Services page to be displayed on mobile, and smaller devices.
                */}

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
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h1"
            component="h1"
            fontWeight={400}
            sx={{ textAlign: "center" }}
          >
            Services
          </Typography>

          <Spacer height={20} />

          <Box>
            <Box sx={{ padding: "0 15px" }}>
              <Paper sx={{ width: "100%", padding: "2em" }}>
                <Typography variant="h6" component="h6">
                  Our services include high fidelity recording, mixing, and
                  mastering. We provide comprehensive support to artists, from
                  songcrafting to sound refinement across genres like indie
                  rock, EDM, and rap. With a dedicated team, top-tier equipment,
                  and an unwavering commitment to excellence, we strive to
                  elevate your artistic vision to new heights. Explore our
                  services below, and connect with us to bring your musical
                  vision to life with our expertise and creativity.
                </Typography>
              </Paper>
            </Box>

            <Box
              sx={{
                display: "block",
                width: "100%",
                padding: "10px 15px 0px 15px",
              }}
            >
              {photoUrls.services.map((service, index) => (
                <Paper
                  id={service.id}
                  key={service.id}
                  sx={{
                    width: "100%",
                    padding: "0 2em",
                    marginTop: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                        xl: "flex",
                      },
                      padding: "2em 0 2em 0",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={service.imgSrc}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      alt={service.alt}
                      width={600}
                      height={450}
                    />
                    <Box>
                      <Spacer height={15} />

                      <Typography variant="h4" component="h4" align="center">
                        {service.title}
                      </Typography>

                      <Spacer height={25} />

                      <Typography variant="p" component="p">
                        {service.description}
                      </Typography>

                      <Spacer height={25} />

                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          href={"/?quote=" + service.id + "#contact-mobile"}
                          variant="contained"
                          fullWidth
                        >
                          Request a quote
                        </Button>
                      </div>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>

            <Spacer height={20} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
