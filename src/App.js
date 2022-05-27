import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Landingpage } from "./pages/Landingpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="Homepage" element={<Homepage />} />
    </Routes>
  );
};

export default App;
