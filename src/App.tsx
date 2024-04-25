import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Cform from "./pages/C-form";
import Downloadapp from "./pages/Downloadapp";
import Support from "./pages/Support";
import Navbar from "./components/Navbar";

function App() {
  return (<>
     <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/app" element={<Downloadapp></Downloadapp>}></Route>
      <Route path="/home/c-form-automation-for-hotels" element={<Cform></Cform>}></Route>
      <Route path="/support" element={<Support></Support>}></Route>
    </Routes>
    </>
  );
}

export default App;
