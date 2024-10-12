import MuiPortableText from "@/components/mui-portable-text";
import Spacer from "@/components/spacer";
import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { PortableText } from "next-sanity";

const dramaticOverrideComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        variant="p"
        component="p"
        align="center"
        sx={{ fontSize: 16.5, fontWeight: 500 }}
      >
        {children}
      </Typography>
    ),
  },
};

export default function MobileAbout({ name, imageUrl, text, tagline }) {
  return (
    <div id="about-mobile">
      <Typography variant="h1" component="h1" align="center" fontWeight={400}>
        {name}
      </Typography>

      <Spacer height={20} />

      <Box
        sx={{
          width: "100%",
          backgroundImage: "url(" + imageUrl + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Spacer height={75} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            className="text-opacity-overlay-mobile-gpt"
            sx={{
              width: "90%",
              padding: "1em",
            }}
          >
            {/* <MuiPortableText text={text} /> */}
            <PortableText
              value={text}
              components={dramaticOverrideComponents}
            />
            <Spacer height={20} />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="b"
                component="b"
                align="center"
                color="primary"
                sx={{ fontSize: 18 }}
              >
                <Link color="inherit" underline="hover" href="#contact-mobile">
                  {tagline}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Spacer height={75} />
      </Box>
    </div>
  );
}
