const TopNav = () => {
  return (
    <div className="main-area-header">
      <div className="search-wrapper" id="searchLine">
        <input
          className="search-input"
          type="text"
          placeholder="e.g. files.doc"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="round"
          strokeLinejoin="round"
          className="feather feather-search"
          viewBox="0 0 24 24"
        >
          <defs />
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
    </div>
  );
};

export default TopNav;
