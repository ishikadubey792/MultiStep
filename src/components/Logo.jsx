import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import WhatshotIcon from "@mui/icons-material/Whatshot";

const Logo = () => {
  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <IconButton
      size= "large"
      // color="inherit"
      aria-label="open drawer"
    >
      <WhatshotIcon
sx={{ fontSize: 32, color: 'linear-gradient(136deg, rgb(242, 113, 33) 0%, rgb(233, 64, 87) 50%, rgb(138, 35, 135) 100%)' }}
/>
      {/* <GradientIcon/> */}
    </IconButton>
    <Typography
      variant="h4"
      noWrap
      component="div"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      ME USER
    </Typography>
  </Box>
  )
}

export default Logo
