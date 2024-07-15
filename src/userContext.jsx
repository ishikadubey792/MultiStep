import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [stepsCount, setStepsCount] = useState(1);
  const [userData, setUserData] = useState({});
  const [allData, setAllData] = useState([]);

  const handleDelete = (email) => {
    const userData = allData.find((user) => user.email === email);
    if (userData) {
      const updatedData = allData.filter((user) => user.email !== email);
      setAllData(updatedData);
      localStorage.setItem("multi-step-form-data", JSON.stringify(updatedData));
    }
  };

  const handleUpdate = (email, updatedData) => {
    const index = allData.findIndex((user) => user.email === email);
    if (index !== -1) {
      let updatedAllData = [...allData];
      updatedAllData[index] = { ...updatedAllData[index], ...updatedData };
      updatedAllData = updatedAllData.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
      console.log(updatedAllData);
      setAllData(updatedAllData);
      localStorage.setItem(
        "multi-step-form-data",
        JSON.stringify(updatedAllData)
      );
    }
  };

  const handleUpdateClick = (data) => {
    setUserData(data);
    setStepsCount(1);
    setModalOpen(true);
  };

  const handleNextStep = () => {
    if (stepsCount < 3) {
      setStepsCount((prev) => prev + 1);
    }
  };

  const handleBackStep = () => {
    setStepsCount((prev) => prev - 1);
  };

  const handleOpen = () => {
    if (modalOpen) {
      setUserData({});
    }
    setModalOpen((prev) => !prev);
    setStepsCount(1);
  };

  const handleSearch = (query) => {
    const allLocalStorageData =
      JSON.parse(localStorage.getItem("multi-step-form-data")) || [];
    const searchedData = allLocalStorageData.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.phoneNumber.includes(query)
    );
    if (searchedData) {
      setAllData(searchedData);
    } else {
      setAllData(allData);
    }
  };

  useEffect(() => {
    const allData =
      JSON.parse(localStorage.getItem("multi-step-form-data")) || [];
    setAllData(allData);
  }, [localStorage]);

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
        handleUpdate,
        handleUpdateClick,
        handleSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
