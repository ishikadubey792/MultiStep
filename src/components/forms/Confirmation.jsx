import {
  Box,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import React from "react";
import { useUserContext } from "../../userContext";
import { useState } from "react";

const Confirmation = () => {
  const {
    handleBackStep,
    stepsCount,
    userData,
    setUserData,
    setStepsCount,
    handleOpen,
    allData,
    setAllData,
  } = useUserContext();
  const [check, setCheck] = useState(false);

  const handleSubmit = () => {
    if (check) {
      const newUpdatedData = [userData, ...allData];
      // handle your form submission here
      setAllData(newUpdatedData);
      localStorage.setItem(
        "multi-step-form-data",
        JSON.stringify(newUpdatedData)
      );
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        country: "",
        state: "",
        city: "",
        zipCode: "",
      });
      setStepsCount(1);
      handleOpen();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack mt={4}>
        <Box display={"flex"} px={4}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Full Name:
          </Typography>
          <Typography ml={1} variant="body2">
            {userData.firstName} {userData.lastName}
          </Typography>
        </Box>
        <Box display={"flex"} px={4}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Email:
          </Typography>
          <Typography ml={1} variant="body2">
            {userData.email}
          </Typography>
        </Box>
        <Box display={"flex"} px={4}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Phone Number:
          </Typography>
          <Typography ml={1} variant="body2">
            {userData.phoneNumber}
          </Typography>
        </Box>
        <Box display={"flex"} px={4}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            Address:
          </Typography>
          <Typography ml={1} variant="body2">
            {userData.address}, {userData.city} , {userData.state}-
            {userData.zipCode} {userData.country}
          </Typography>
        </Box>
        <Box display={"flex"} mt={3}>
          <FormControlLabel
            label="Are you sure you want to submit all these details"
            control={
              <Checkbox
                color="primary"
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
              />
            }
            sx={{ ml: 2 }}
          />
        </Box>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} mt={4}>
        <Button
          onClick={handleBackStep}
          disabled={stepsCount < 2}
          type="button"
          variant="contained"
          color="primary"
        >
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {stepsCount === 3 ? "Submit" : "Next"}
        </Button>
      </Stack>
    </form>
  );
};

export default Confirmation;
