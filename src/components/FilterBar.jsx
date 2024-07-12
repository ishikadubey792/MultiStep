import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import React from "react";

const FilterBar = () => {
  return (
    <Stack mt={5} direction={"row"} justifyContent={"end"} p={4}>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Button endIcon={<TuneIcon />}>
            Filter
        </Button>
      </Stack>
    </Stack>
  );
};

export default FilterBar;