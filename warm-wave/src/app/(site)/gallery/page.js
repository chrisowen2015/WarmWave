import { Box } from "@mui/material";
import Spacer from "@/components/spacer";
import MobileGallery from "@/components/Mobile/Homepage/gallery";
import Gallery from "@/components/Homepage/gallery";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const options = { next: { revalidate: 60 } };

const GALLERY_QUERY = groq`*[_type == "page" && name == "Gallery"]{
  name,
  "galleryImages": gallery[]{
    "imageUrl": image.asset->url,
    alt
  }
}[0]`;

export default async function GalleryPage() {
  const gallery = await client.fetch(GALLERY_QUERY, {}, options);
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
        <MobileGallery name={gallery.name} images={gallery.galleryImages} />
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
        <Gallery name={gallery.name} images={gallery.galleryImages} />
        <Spacer height={30} />
      </Box>
    </>
  );
}
