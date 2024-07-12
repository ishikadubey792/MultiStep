import { Stack, TextField, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../userContext";

const PersonalInfo = () => {
  const { handleBackStep, handleNextStep, stepsCount, setUserData, userData ,allData} = useUserContext();
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    setUserData({ ...data, ...userData });
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack gap={2} mt={4}>
        <Stack direction={"row"} gap={2}>
          <TextField
            label="First Name"
            type="text"
            {...register("firstName", { required: "First Name is Required" })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
            label="Last Name"
            type="text"
            {...register("lastName", { required: "Last Name is Required" })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Stack>
        <TextField
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
            validate: {
              emailAvailable: (fieldValue) => {
                const emailExist = allData.find((data) => data.email === fieldValue);
                 return emailExist === undefined || "Email already exists"
                
              },
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Phone Number"
          type="tel"
          {...register("phoneNumber", {
            required: "Phone Number is Required",
            validate: {
              phoneNumberAvailable: (fieldValue) => {
                const phoneNumberExist = allData.find((data) => data.phoneNumber === fieldValue);
                return phoneNumberExist === undefined || "Phone Number already exists";
              },
            },
          })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
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

export default PersonalInfo;
