import { Stack, TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useUserContext } from "../../userContext";
import { useForm } from "react-hook-form";

const AddressInfo = () => {
  const { handleBackStep, handleNextStep, stepsCount, setUserData , userData} = useUserContext();

  const form = useForm({
    defaultValues: {
      address: userData.address,
      country: userData.country,
      state: userData.state,
      city: userData.city,
      zipCode: userData.zipCode,
    },
  });
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

console.log(userData);
  const onSubmit = (data) => {
    setUserData({
      ...userData,
      address: data.address,
      country: data.country,
      state: data.state,
      city: data.city,
      zipCode: data.zipCode,
    });
    console.log("Form Submitted", data);
    handleNextStep();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2} mt={4}>
        <TextField value={userData?.address}
          label="Address Line"
          type="text"
          {...register("address", { required: "Address is Required" })}
          error={!!errors.address}
          helperText={errors.address?.message}
        />
        <Stack direction={"row"} gap={2}>
          <TextField value={userData?.country}
            label="Country"
            type="text"
            {...register("country", { required: "Country is Required" })}
            error={!!errors.country}
            helperText={errors.country?.message}
          />
          <TextField value={userData?.state}
            label="State"
            type="text"
            {...register("state", { required: "State is Required" })}
            error={!!errors.state}
            helperText={errors.state?.message}
          />
        </Stack>
        <Stack direction={"row"} gap={2}>
          <TextField value={userData?.city}
            label="City"
            type="text"
            {...register("city", { required: "City is Required" })}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
          <TextField value={userData?.zipCode}
            label="Zip Code"
            type="text"
            {...register("zipCode", { required: "Zip Code is Required" })}
            error={!!errors.zipCode}
            helperText={errors.zipCode?.message}
          />
        </Stack>
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

export default AddressInfo;
