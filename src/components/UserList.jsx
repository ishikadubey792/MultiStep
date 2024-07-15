import React from "react";
import { useUserContext } from "../userContext";
import UserCard from "./UserCard";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const UserList = () => {
  const { allData , handleOpen } = useUserContext();
  return (
    <Box sx={{ width: "100%" }}>
       {allData.length > 0 && 
      <Grid container spacing={4} px={10} py={5} sx={{ bgcolor: "#ededed" }}>
          {allData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <UserCard data={data} />
            </Grid>
          ))}
      </Grid>
     }
      {allData.length === 0 && (
        <Stack justifyContent={"center"} alignItems={"center"} sx={{ bgcolor: "#ededed", height:"calc(100vh - 140px)"}}>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <IconButton
              onClick={handleOpen}
              size="large"
              edge="start"
              aria-label="open drawer"
            >
              <AddCircleOutlineOutlinedIcon sx={{fontSize:'50px' , color: "#a1a1a1"}} />
            </IconButton>
            <Typography variant="body1" sx={{color: "#a1a1a1" , fontSize:"20px" , padding:{xs: "30px" , sm:"0"}}}>
              No users found. Click the button above to add a new user.
            </Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default UserList;
