import { Box } from "@mui/material";
import About from "@/components/Homepage/about";
import MobileAbout from "@/components/Mobile/Homepage/about";
import Spacer from "@/components/spacer";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const options = { next: { revalidate: 60 } };

const ABOUT_QUERY = groq`*[_type == "page" && name == "About Us"]{
  name,
  "imageUrl": image.asset->url,
  "mobileImageUrl": mobileImage.asset->url,
  text,
  tagline
}[0]`;

export default async function AboutPage() {
  const about = await client.fetch(ABOUT_QUERY, {}, options);
  return (
    <>
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
        <MobileAbout
          name={about.name}
          imageUrl={about.mobileImageUrl}
          text={about.text}
          tagline={about.tagline}
        />
        <Spacer height={20} />
      </Box>
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
        <About
          name={about.name}
          imageUrl={about.imageUrl}
          text={about.text}
          tagline={about.tagline}
        />
        <Spacer height={30} />
      </Box>
    </>
  );
}
