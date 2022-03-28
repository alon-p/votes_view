import './App.css';
import Home from "./pages/Home";
import Results from "./pages/Results";
import {Route, Routes} from "react-router-dom";
import {CssBaseline} from "@mui/material";

function App() {
  return (
    <div className="App" dir="rtl">
        <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
