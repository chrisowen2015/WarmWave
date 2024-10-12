import { Box, Divider, Typography, Link } from "@mui/material";

export default function CopyRight() {
  return (
    <div>
      <Divider />
      <Box sx={{ padding: "1em", marginBottom: ".5rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="p" component="p">
            <Link color="inherit" underline="hover" href="/sanity">
              ©&nbsp;
            </Link>
          </Typography>
          <Typography variant="p" component="p">
            2023 Warm Wave Records
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="p" component="p">
            All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
