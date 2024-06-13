import React from "react";
import NavBar from "../components/navBar";
import ContactForm from "../components/ContactForm";
import { SharedDropDownProvider } from "../context/dropdownContext";
import { AuthProvider } from "../context/authContext";
const Home = () => {
return(
    <div>
        <AuthProvider>
    <SharedDropDownProvider>
    <NavBar></NavBar>
    <ContactForm></ContactForm>
    </SharedDropDownProvider>
    </AuthProvider>
    </div>
)
}

export default Home; 