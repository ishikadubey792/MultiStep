import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import { useUserContext } from "../userContext";

const getAsciiSum = (str) => {
  return str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

const getAvatarBgColor = (firstName, lastName) => {
  const sumAscii = getAsciiSum(firstName) + getAsciiSum(lastName);
  const hue = sumAscii % 360;
  return `hsl(${hue}, 70%, 50%)`;
};

const UserCard = ({ data }) => {
  const { handleDelete, handleUpdateClick } = useUserContext();
  const avatarBgColor = getAvatarBgColor(data.firstName, data.lastName);
  return (
    <Card
      sx={{
        minHeight: 320,
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        padding: 2
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Avatar
        sx={{
          width: 70,
          height: 70,
          margin: "10px auto",
          bgcolor: avatarBgColor,
        }}
      >
        {data.firstName[0].toUpperCase()}
        {data.lastName[0].toUpperCase()}
      </Avatar>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {data.firstName} {data.lastName}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          fontStyle={"italic"}
          textAlign={"center"}
        >
          {data.email}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          textAlign={"center"}
        >
          +91-{data.phoneNumber}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {data.address}, {data.city} , {data.state}-{data.zipCode}{" "}
          {data.country}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Button
          sx={{ color: "green" }}
          onClick={() => handleUpdateClick(data)}
          size="small"
        >
          Update
        </Button>
        <Button
          sx={{ color: "red" }}
          onClick={() => handleDelete(data.email)}
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default UserCard;
