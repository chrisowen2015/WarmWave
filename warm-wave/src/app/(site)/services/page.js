import React from "react";
import { Box, Divider, Paper, Typography, Button } from "@mui/material";
import Spacer from "@/components/spacer";
import Image from "next/image";
import photoUrls from "@/utils/photo-urls";

import MuiPortableText from "@/components/mui-portable-text";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const options = { next: { revalidate: 60 } };

const SERVICES_QUERY = groq`*[_type == "page" && name == "Services"]{
  name,
    text,
  services[] -> {
    name,
    description,
    "image": image.asset -> url,
    "mobileImage": mobileImage.asset -> url,
    price,
    order
  }
}[0]`;

export default async function Services() {
  const services = await client.fetch(SERVICES_QUERY, {}, options);

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
            {services.name}
          </Typography>
        </Box>

        <Spacer height={30} />

        <Paper sx={{ padding: "2em", margin: "0 2em" }}>
          <Spacer height={10} />
          <MuiPortableText text={services.text} />
          <Spacer height={50} />
          {services.services
            .sort((a, b) => a.order - b.order)
            .map((service, index) => (
              <div id={service.id} key={service.id}>
                <Box sx={{ display: "flex", padding: "2em 0 2em 0" }}>
                  <Image
                    src={service.image}
                    width={600}
                    height={450}
                    alt={service.name + " image"}
                  />
                  <Box sx={{ marginLeft: "2em" }}>
                    <Typography variant="h4" component="h4">
                      {service.name}
                    </Typography>

                    <Spacer height={25} />

                    <MuiPortableText text={service.description} />

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

                {index !== services.services.length - 1 && <Divider />}
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
            {services.name}
          </Typography>

          <Spacer height={20} />

          <Box>
            <Box sx={{ padding: "0 15px" }}>
              <Paper sx={{ width: "100%", padding: "2em" }}>
                <MuiPortableText text={services.text} />
              </Paper>
            </Box>

            <Box
              sx={{
                display: "block",
                width: "100%",
                padding: "10px 15px 0px 15px",
              }}
            >
              {services.services
                .sort((a, b) => a.order - b.order)
                .map((service, index) => (
                  <Paper
                    id={index}
                    key={index}
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
                        src={service.mobileImage}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        alt={service.name + " image"}
                        width={600}
                        height={450}
                      />
                      <Box>
                        <Spacer height={15} />

                        <Typography variant="h4" component="h4" align="center">
                          {service.name}
                        </Typography>

                        <Spacer height={25} />

                        <MuiPortableText text={service.description} />

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
