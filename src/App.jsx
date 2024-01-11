import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Detials from "./Pages/Detials";
import data from "./assets/MyanmarMonths.json";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path=":id" element={<Detials data={data} />} />
      </Routes>
    </Router>
  );
};
export default App;
