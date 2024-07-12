import React from 'react';
import {Card, CardActions , CardContent,Button,Typography,Avatar} from "@mui/material";
import { useUserContext } from '../userContext';

export default function UserCard({data}) {
    const {handleDelete} = useUserContext();
  return (
    <Card sx={{minHeight:300}}>
      <Avatar sx={{width:70, height:70 , margin:"10px auto"}}>
        {data.firstName[0].toUpperCase() }{data.lastName[0].toUpperCase()}
      </Avatar>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.firstName} {data.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.phoneNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.address}, {data.city} , {data.state}-
        {data.zipCode} {data.country}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color:"green"}} size="small">Update</Button>
        <Button sx={{color:"red"}} onClick={()=>handleDelete(data.email)} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
