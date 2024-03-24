import { Box } from "@mui/material";
import Contact from "@/components/Homepage/contact";
import MobileContact from "@/components/Mobile/Homepage/contact";
import Spacer from "@/components/spacer";

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
        <Spacer height={100} />
        <MobileContact />
        <Spacer height={"2em"} />
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
        <Spacer height={200} />
        <Contact />
      </Box>
    </>
  );
}
