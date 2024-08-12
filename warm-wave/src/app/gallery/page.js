import { Box } from "@mui/material";
import Spacer from "@/components/spacer";
import MobileGallery from "@/components/Mobile/Homepage/gallery";
import Gallery from "@/components/Homepage/gallery";

export default function AboutPage() {
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
        <MobileGallery />
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
        <Gallery />
        <Spacer height={30} />
      </Box>
    </>
  );
}
