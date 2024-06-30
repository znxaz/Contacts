import ContactCard from "../components/contact";
import { ContactTable } from "../components/contactTable";
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
          <ContactTable>
          <ContactCard></ContactCard>
          </ContactTable>
        </SharedDropDownProvider>
      </AuthProvider>
    </>
  );
};

export default Contacts;
