import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Contacts from "./Pages/Contacts";
import { Toast } from "./components/toast";
import { Loader } from "./components/loader";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Auth" element={<Auth />}></Route>
          <Route path="Contacts" element={<Contacts />}></Route>
        </Routes>
        <Toast />
      </AuthProvider>
    </>
  );
}

export default App;
