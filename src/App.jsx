import React, {useEffect} from "react";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import { UserContextProvider } from "./userContext";
import FormModal from "./components/FormModal";
import UserList from "./components/UserList";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <UserContextProvider>
      <Navbar />
      <FilterBar />
      <UserList />
      <FormModal />
    </UserContextProvider>
  );
};

export default App;
