import {
    Modal,
    Stack,
    styled,
  } from "@mui/material";
  import React from "react";
  import { useUserContext } from "../userContext";
  import Logo from "./Logo"; 
  import StepperBar from "./StepperBar";
import PersonalInfo from "./forms/PersonalInfo";
import AddressInfo from "./forms/AddressInfo";
import Confirmation from "./forms/Confirmation";
import { Height } from "@mui/icons-material";

const ModalBox = styled(Stack)(({theme})=>({
  minWidth:400,
  borderRadius:40,
  padding:40,
  backgroundColor:theme.palette.background.paper,
  [theme.breakpoints.down("sm")]:{
    padding:30,
    minWidth:"auto",
    height:"fit-content",
    overflowY:"auto",
    borderRadius:"20px",
    marginRight:20,
    marginLeft:20
  }
})) 
  const FormModal = () => {
    const { modalOpen, handleOpen , stepsCount} = useUserContext();
    return (
      <div>
        <Modal
          keepMounted
          open={modalOpen}
          onClose={handleOpen}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <ModalBox>
            <Logo/>
            <StepperBar/>
           {stepsCount === 1 && <PersonalInfo/> }
            {stepsCount === 2 && <AddressInfo/>}
            {stepsCount === 3 && <Confirmation/>}
          </ModalBox>
        </Modal>
      </div>
    );
  };
  
  export default FormModal;