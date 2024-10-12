import About from "@/components/Homepage/about";
import Contact from "@/components/Homepage/contact";
import Gallery from "@/components/Homepage/gallery";
import Header from "@/components/Homepage/header";
import Spacer from "@/components/spacer";
import { Box } from "@mui/material";
import MobileAbout from "@/components/Mobile/Homepage/about";
import MobileContact from "@/components/Mobile/Homepage/contact";
import MobileGallery from "@/components/Mobile/Homepage/gallery";
import MobileHeader from "@/components/Mobile/Homepage/header";

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

const GALLERY_QUERY = groq`*[_type == "page" && name == "Gallery"]{
  name,
  "galleryImages": gallery[]{
    "imageUrl": image.asset->url,
    alt
  }
}[0]`;

const HEADER_QUERY = groq`*[_type == "page" && name == "Home"]{
  name,
  "imageUrl": image.asset->url,
  "mobileImageUrl": mobileImage.asset->url,
  tagline
}[0]`;

export default async function Home() {
  const [about, gallery, header] = await Promise.all([
    client.fetch(ABOUT_QUERY, {}, options),
    client.fetch(GALLERY_QUERY, {}, options),
    client.fetch(HEADER_QUERY, {}, options),
  ]);

  return (
    // The landing page of the website, allows for different spacing between the elements depending on the screen size

    <>
      {
        // The Desktop version of the landing page
      }
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
        <Header header={header} />
        <Spacer height={30} />
        <About
          name={about.name}
          imageUrl={about.imageUrl}
          text={about.text}
          tagline={about.tagline}
        />
        <Spacer height={30} />
        <Gallery name={gallery.name} images={gallery.galleryImages} />
        <Spacer height={30} />
        <Contact />
      </Box>

      {
        // The Mobile version of the landing page
      }

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
        <MobileHeader header={header} />
        <Spacer height={20} />
        <MobileAbout
          name={about.name}
          imageUrl={about.mobileImageUrl}
          text={about.text}
          tagline={about.tagline}
        />
        <Spacer height={20} />
        <MobileGallery name={gallery.name} images={gallery.galleryImages} />
        <Spacer height={20} />
        <MobileContact />
      </Box>
    </>
  );
}
