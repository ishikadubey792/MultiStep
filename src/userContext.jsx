import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [stepsCount, setStepsCount] = useState(1);
  const [userData, setUserData] = useState({
   
  });
  const [allData , setAllData] = useState([]);

  const handleDelete = (email) => {
      const userData = allData.find(user => user.email === email);
      if(userData){
        const updatedData = allData.filter((user)=>user.email !== email);
        setAllData(updatedData)
        localStorage.setItem("multi-step-form-data",JSON.stringify(updatedData))
      }
  }
  const handleUpdate = (data) =>{
      handleOpen();
      setStepsCount(1);
      setUserData({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        country: data.country,
        state: data.state,
        city: data.city,
        zipCode: data.zipCode,
        phoneNumber: data.phoneNumber,
      });
  }
  const handleNextStep = () => {
    if (stepsCount < 3) {
      setStepsCount((prev) => prev + 1);
    }
  };
  const handleBackStep = () => {
    setStepsCount((prev) => prev - 1);
  };
  const handleOpen = () => {
    setModalOpen((prev) => !prev);
  };
  useEffect(() => {
     const allData = JSON.parse(localStorage.getItem('multi-step-form-data')) || [];
     setAllData(allData);
  },[localStorage])
  console.log(allData);

  return (
    <UserContext.Provider
      value={{
        modalOpen,
        handleOpen,
        handleNextStep,
        handleBackStep,
        stepsCount,
        userData,
        setUserData,
        setStepsCount,
        allData,
        setAllData,
        handleDelete,
        handleUpdate
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
