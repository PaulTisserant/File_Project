import "./styles.css";
import LeftNav from "./components/LeftNav.js";
import MainContent from "./components/MainCenter/MainContent.js";
import RightContent from "./components/RightContent.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <LeftNav />
        <Routes>
          <Route path="/" element={<MainContent content={"root"} />} />
          <Route path="/folder" element={<MainContent content={"folder"} />} />
          <Route path="/disk" element={<MainContent content={"disk"} />} />
          <Route
            path="/settings"
            element={<MainContent content={"settings"} />}
          />
        </Routes>
        <RightContent />
      </Router>
    </div>
  );
}
