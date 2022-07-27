import TopNav from "../TopNav.js";
import Preview from "./Preview.js";
import QuickAccess from "./QuickAccess.js";
import Folder from "./Folder.js";
import Disk from "./Disk.js";
import Settings from "./Settings.js";
const MainContent = (props) => {
  function DynamicContent(content) {
    switch (content) {
      case "root":
        return (
          <div>
            {" "}
            <QuickAccess />
            <Preview />{" "}
          </div>
        );

      case "folder":
        return (
          <div>
            {" "}
            <Folder />{" "}
          </div>
        );

      case "disk":
        return (
          <div>
            {" "}
            <Disk />{" "}
          </div>
        );

      case "settings":
        return (
          <div>
            {" "}
            <Settings />{" "}
          </div>
        );
      default:
        break;
    }
  }
  return (
    <div className="main-area">
      <button className="btn-show-right-area">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="btn-show-left-area">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <TopNav />
      {DynamicContent(props.content)}
      <section className="content-section">
        <h3> La suite </h3>
        <p> Qu'est ce qu'il pourrait etre pratique ? </p>
        <br />
        <p> Un chat entre les users </p>
      </section>
    </div>
  );
};

export default MainContent;
