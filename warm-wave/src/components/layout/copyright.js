import { Box, Divider, Typography } from "@mui/material";

export default function CopyRight() {
  return (
    <div>
      <Divider />
      <Box sx={{ padding: "2em" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="p" component="p">
            © 2023 Warm Wave Studio
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
