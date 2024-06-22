import ContactCard from "../components/contact";
import NavBar from "../components/navBar";
import {SharedDropDownProvider } from "../context/dropdownContext";
const Contacts = () => {
  return (
<>
<SharedDropDownProvider>
  <NavBar></NavBar>
  <ContactCard></ContactCard>
</SharedDropDownProvider>
</>
  );
};

export default Contacts
