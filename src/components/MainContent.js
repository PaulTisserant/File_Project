import TopNav from "../components/TopNav.js";
const MainContent = () => {
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
                className="feather feather-layers"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <span className="access-text">Apps</span>
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
                className="feather feather-arrow-down-circle"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="8 12 12 16 16 12" />
                <line x1="12" y1="8" x2="12" y2="16" />
              </svg>
            </div>
            <span className="access-text">Download</span>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="section-header-wrapper">
          <h1 className="section-header">Preview</h1>
          <a href="/" className="section-header-link">
            View in folders
          </a>
        </div>
        <div className="content-section-line">
          <div className="section-part left">
            <a href="/" className="image-wrapper">
              <div className="image-overlay">
                <div className="video-info">
                  <div className="video-info-text">
                    <p className="video-name medium">Happiness & Tears</p>
                    <p className="video-subtext medium">45.5 MB</p>
                  </div>
                  <button className="btn-play"></button>
                </div>
              </div>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
              />
              <span className="video-time">10:32</span>
            </a>
          </div>
          <div className="section-part right">
            <div className="content-part-line">
              <a href="/" className="image-wrapper">
                <div className="image-overlay">
                  <div className="video-info">
                    <div className="video-info-text">
                      <p className="video-name tiny">High Hopes</p>
                      <p className="video-subtext tiny">50 MB</p>
                    </div>
                  </div>
                </div>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80"
                />
                <span className="video-time">02:35</span>
              </a>
              <a href="/" className="image-wrapper">
                <div className="image-overlay">
                  <div className="video-info">
                    <div className="video-info-text">
                      <p className="video-name tiny">Imaginery you</p>
                      <p className="video-subtext tiny">210.2 MB</p>
                    </div>
                  </div>
                </div>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80"
                />
                <span className="video-time">04:15</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="section-header-wrapper">
          <h1 className="section-header">Recent Files</h1>
          <a href="/" className="section-header-link">
            View all files
          </a>
        </div>
        <div className="files-table">
          <div className="files-table-header">
            <div className="column-header table-cell">Name</div>
            <div className="column-header table-cell size-cell">Size</div>
            <div className="column-header table-cell">Last Modified</div>
            <div className="column-header table-cell">Action</div>
          </div>
          <div className="files-table-row">
            <div className="table-cell name-cell pdf">Brandenburg.pdf</div>
            <div className="table-cell">42 MB</div>
            <div className="table-cell">Aug 26, 2020</div>
            <div className="table-cell action-cell">
              <button className="more-action"></button>
            </div>
          </div>
          <div className="files-table-row">
            <div className="table-cell name-cell jpg">TheLionsRoar.jpg</div>
            <div className="table-cell size-cell">500 KB</div>
            <div className="table-cell">Aug 26, 2020</div>
            <div className="table-cell action-cell">
              <button className="more-action"></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
