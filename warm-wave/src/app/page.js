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

export default function Home() {
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
        <Header />
        <Spacer height={60} />
        <About />
        <Spacer height={60} />
        <Gallery />
        <Spacer height={100} />
        <Contact />
        <Spacer height={50} />
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
        <MobileHeader />
        <Spacer height={35} />
        <MobileAbout />
        <Spacer height={35} />
        <MobileGallery />
        <Spacer height={35} />
        <MobileContact />
        <Spacer height={35} />
      </Box>
    </>
  );
}
