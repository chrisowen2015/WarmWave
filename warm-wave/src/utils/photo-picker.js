import { Box, Stack, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function PhotoPicker(){
    function nextPhoto(forward) {
        if (forward == true) {
          if (currentPhotoIndex == photoUrls.headerMobile.length - 1) {
            setCurrentPhotoIndex(0);
          } else {
            setCurrentPhotoIndex(currentPhotoIndex + 1);
          }
        } else if (forward == false) {
          if (currentPhotoIndex == 0) {
            setCurrentPhotoIndex(photoUrls.headerMobile.length - 1);
          } else {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
          }
        }
      }
      
    return (
        <Box sx={{ width: "100%", marginTop: "2em" }}>
        <Stack direction={"row"} justifyContent={"center"}>
          <IconButton onClick={() => nextPhoto(false)}>
            <ArrowBack />
          </IconButton>
          <Typography component={"b"} variant={"b"}>
            {currentPhotoIndex}
          </Typography>
          <IconButton onClick={() => nextPhoto(true)}>
            <ArrowForward />
          </IconButton>
        </Stack>
      </Box>
    )
}