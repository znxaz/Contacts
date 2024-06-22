import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Contacts from "./Pages/Contacts"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Auth" element={<Auth />}></Route>
      <Route path="Contacts" element={<Contacts />}></Route>
    </Routes>
  );
}

export default App;
