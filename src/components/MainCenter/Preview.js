const Preview = () => {
  return (
    <>
      <section className="content-section">
        <div className="section-header-wrapper">
          <h1 className="section-header">Preview</h1>
          <a href="/" className="section-header-link">
            View in folders
          </a>
        </div>
        <div className="content-section-line">
          <div className="section-part left">
            <a href="/folder" className="image-wrapper">
              <div className="image-overlay">
                <div className="video-info">
                  <div className="video-info-text">
                    <p className="video-name medium">photo paul f</p>
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
                      <p className="video-name tiny">monsieurKiSaute</p>
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
                      <p className="video-name tiny">ouais</p>
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
            <div className="table-cell name-cell pdf">CV.pdf</div>
            <div className="table-cell">42 MB</div>
            <div className="table-cell">Jul 26, 2022</div>
            <div className="table-cell action-cell">
              <button className="more-action"></button>
            </div>
          </div>
          <div className="files-table-row">
            <div className="table-cell name-cell jpg">bike.jpg</div>
            <div className="table-cell size-cell">500 KB</div>
            <div className="table-cell">Jul 26, 2022</div>
            <div className="table-cell action-cell">
              <button className="more-action"></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
