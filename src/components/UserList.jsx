import React from 'react'
import { useUserContext } from '../userContext'
import UserCard from './UserCard';
import { Box,Grid } from '@mui/material';

const UserList = () => {
    const {allData} = useUserContext();
  return (
    <Box sx={{ width: '100%'}}>
            <Grid container spacing={4} px={10} py={5}>
                {allData.length > 0 && allData.map((data, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <UserCard data={data} />
                    </Grid>
                ))}
            </Grid>
    </Box>
  )
}

export default UserList;
