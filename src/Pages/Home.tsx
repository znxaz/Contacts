import React from "react";
import NavBar from "../components/navBar";
import ContactForm from "../components/ContactForm";
import { SharedDropDownProvider } from "../context/dropdownContext";
const Home = () => {
return(
    <div>
        <SharedDropDownProvider>
    <NavBar></NavBar>
    <ContactForm></ContactForm>
    </SharedDropDownProvider>
    </div>
)
}

export default Home; 