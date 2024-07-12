import { Stack, TextField, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../userContext";

const PersonalInfo = () => {
  const { handleBackStep, handleNextStep, stepsCount, setUserData , userData} = useUserContext();
  const form = useForm({
    defaultValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    },
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    setUserData({...data, ...userData});
    console.log("Form Submitted", data);
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack gap={2} mt={4}>
        <Stack direction={"row"} gap={2}>
          <TextField value={userData?.firstName}
            label="First Name"
            type="text"
            {...register("firstName", { required: "First Name is Required" })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField value={userData?.lastName}
            label="Last Name"
            type="text"
            {...register("lastName", { required: "Last Name is Required" })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Stack>
        <TextField value={userData?.email}
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField value={userData?.phoneNumber}
          label="Phone Number"
          type="number"
          {...register("phoneNumber", { required: "Phone Number is Required" })}
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
