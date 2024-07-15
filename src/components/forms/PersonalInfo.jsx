import { Stack, TextField, Button, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useUserContext } from "../../userContext";

const SwitchButton = styled(Button)({
  backgroundImage:
  "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
  "&:hover": {
    backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
  },
  "&:disabled": {
    backgroundImage: "none"
  }
})

const PersonalInfo = () => {
  const {
    handleBackStep,
    handleNextStep,
    stepsCount,
    setUserData,
    userData,
    allData,
  } = useUserContext();

  const { control, handleSubmit, setValue, formState, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    setUserData({
      ...userData,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    });
    handleNextStep();
  };

  useEffect(() => {
    if (
      userData.firstName &&
      userData.lastName &&
      userData.email &&
      userData.phoneNumber
    ) {
      setValue("firstName", userData.firstName, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
      setValue("lastName", userData.lastName, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
      setValue("email", userData.email, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
      setValue("phoneNumber", userData.phoneNumber, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
    } else {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
    }
  }, [userData, setValue]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack gap={2} mt={4}>
          <Stack direction={"row"} gap={2}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First Name is Required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last Name is Required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              )}
            />
          </Stack>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is Required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
              validate: {
                emailAvailable: (fieldValue) => {
                  if (userData.email && userData.email === fieldValue) {
                    return true;
                  }
                  const emailExist = allData.find(
                    (data) => data.email === fieldValue
                  );
                  return emailExist === undefined || "Email already exists";
                },
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: "Phone Number is Required",
              validate: {
                phoneNumberAvailable: (fieldValue) => {
                  if (
                    userData.phoneNumber &&
                    userData.phoneNumber === fieldValue
                  ) {
                    return true;
                  }
                  const phoneNumberExist = allData.find(
                    (data) => data.phoneNumber === fieldValue
                  );
                  return (
                    phoneNumberExist === undefined ||
                    "Phone Number already exists"
                  );
                },
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone Number"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            )}
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} mt={4}>
          <SwitchButton
            onClick={handleBackStep}
            disabled={stepsCount < 2}
            type="button"
            variant="contained"
            color="primary"
          >
            Back
          </SwitchButton>
          <SwitchButton type="submit" variant="contained">
            {stepsCount === 3 ? "Submit" : "Next"}
          </SwitchButton>
        </Stack>
      </form>
    </>
  );
};

export default PersonalInfo;
