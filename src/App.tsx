import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
function App() {
  return (
    <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/Auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
