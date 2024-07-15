import { Stack, TextField, Button, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useUserContext } from "../../userContext";
import { useForm, Controller } from "react-hook-form";

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

const AddressInfo = () => {
  const { handleBackStep, handleNextStep, stepsCount, setUserData, userData } =
    useUserContext();

  const { control, handleSubmit, setValue, formState, reset } = useForm({
    defaultValues: {
      address: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
    },
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    setUserData({
      ...userData,
      address: data.address,
      country: data.country,
      state: data.state,
      city: data.city,
      zipCode: data.zipCode,
    });
    handleNextStep();
  };

  useEffect(() => {
    if (
      userData.address &&
      userData.country &&
      userData.state &&
      userData.city &&
      userData.zipCode
    ) {
      setValue("address", userData.address, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
      setValue("country", userData.country, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
      setValue("state", userData.state, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
      setValue("city", userData.city, {
        shouldDirty: true,
        shouldValidate: true,
        shouldTouch: true,
      });
      setValue("zipCode", userData.zipCode, {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2} mt={4}>
        <Controller
          name="address"
          control={control}
          rules={{ required: "Address is Required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Address Line"
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          )}
        />
        <Stack direction={"row"} gap={2}>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is Required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Country"
                error={!!errors.country}
                helperText={errors.country?.message}
              />
            )}
          />
          <Controller
            name="state"
            control={control}
            rules={{ required: "State is Required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="State"
                error={!!errors.state}
                helperText={errors.state?.message}
              />
            )}
          />
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Controller
            name="city"
            control={control}
            rules={{ required: "City is Required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="City"
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            )}
          />
          <Controller
            name="zipCode"
            control={control}
            rules={{ required: "Zip Code is Required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Zip Code"
                error={!!errors.zipCode}
                helperText={errors.zipCode?.message}
              />
            )}
          />
        </Stack>
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
        <SwitchButton type="submit" variant="contained" color="primary">
          {stepsCount === 3 ? "Submit" : "Next"}
        </SwitchButton>
      </Stack>
    </form>
  );
};

export default AddressInfo;
