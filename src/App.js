import "./styles.css";
import LeftNav from "./components/LeftNav.js";
import MainContent from "./components/MainContent";
import RightContent from "./components/RightContent";

export default function App() {
  return (
    <div className="app-container">
      <LeftNav />
      <MainContent />
      <RightContent />
    </div>
  );
}
