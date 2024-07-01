import NavBar from "../components/navBar";
import { AuthProvider } from "../context/authContext";
import { SharedDropDownProvider } from "../context/dropdownContext";
import { UserContacts } from "../components/UserContacts";

const Contacts = () => {
  return (
    <>
      <AuthProvider>
        <SharedDropDownProvider>
          <NavBar></NavBar>
          <UserContacts></UserContacts>
        </SharedDropDownProvider>
      </AuthProvider>
    </>
  );
};

export default Contacts;
