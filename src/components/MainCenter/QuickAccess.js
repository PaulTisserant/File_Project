const QuickAccess = () => {
  return (
    <section className="content-section">
      <h1 className="section-header">Quick Access</h1>
      <div className="access-links">
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="feather feather-image"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <span className="access-text">Images</span>
        </div>
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="feather feather-music"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" /> <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <span className="access-text">Music</span>
        </div>
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="feather feather-play"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <span className="access-text">Video</span>
        </div>
        <div className="access-link-wrapper">
          <div className="access-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="feather feather-align-left"
            >
              <line x1="17" y1="10" x2="3" y2="10" />
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="21" y1="14" x2="3" y2="14" />
              <line x1="17" y1="18" x2="3" y2="18" />
            </svg>
          </div>
          <span className="access-text">Docs</span>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
