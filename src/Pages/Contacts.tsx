import ContactCard from "../components/contact";
import NavBar from "../components/navBar";
import { AuthProvider } from "../context/authContext";
import {
  SharedDropDownProvider,
  useSharedDropDownState,
} from "../context/dropdownContext";

const Contacts = () => {
  return (
    <>
      <AuthProvider>
        <SharedDropDownProvider>
          <NavBar></NavBar>
          <ContactCard></ContactCard>
        </SharedDropDownProvider>
      </AuthProvider>
    </>
  );
};

export default Contacts;
