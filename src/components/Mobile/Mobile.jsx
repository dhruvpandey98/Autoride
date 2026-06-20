import './Mobile.css'

const AppDownload = () => {
  return (
    <div className="app-download">
      <div className="app-left">
        <div className="app-title">
          <h2>Download mobile app</h2>
        </div>
        <div className="app-content">
          <p>
            Book your ride, track your rental, and manage your trips on the
            go. Get the full experience right from your phone, wherever you
            are.
          </p>
        </div>
        <div className="app-stores">
          <a href="#" className="store-badge" aria-label="Download on the App Store">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M16.7 12.4c0-1.8 1.5-2.7 1.5-2.7-.8-1.2-2.1-1.4-2.6-1.4-1.1 0-2 .6-2.6.6-.6 0-1.4-.6-2.3-.6-1.2 0-2.3.7-2.9 1.8-1.2 2.1-.3 5.4 1 7.2.6.9 1.3 1.9 2.2 1.9.9 0 1.2-.6 2.3-.6s1.4.6 2.3.6c.9 0 1.6-.9 2.1-1.8.4-.6.7-1.2.9-1.9-.1 0-1.9-.7-1.9-3.1z"/>
              <path d="M14.6 6.7c.5-.6.8-1.4.7-2.2-.7 0-1.5.5-2 1-.4.5-.8 1.3-.7 2.1.8.1 1.5-.4 2-.9z"/>
            </svg>
            <span>
              <small>Download on the</small>
              App Store
            </span>
          </a>
          <a href="#" className="store-badge" aria-label="Get it on Google Play">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M3.6 2.7c-.4.3-.6.8-.6 1.4v15.8c0 .6.2 1.1.6 1.4l8.7-9.3-8.7-9.3z" fill="#c8ff4d"/>
              <path d="M15.9 12l-3.6-3.4-8.7-4.9c.1-.1.2-.2.4-.2.3 0 .5.1.7.2l9.4 5.3-2.2 3z" fill="#f5f3ee"/>
              <path d="M15.9 12l2.2-3 2.5 1.4c.7.4.7 1.4 0 1.8l-2.5 1.4-2.2-2.6z" fill="#9a9da3"/>
              <path d="M15.9 12l-3.6 3.4-9.4 5.3c-.2.1-.4.2-.7.2-.2 0-.3-.1-.4-.2l8.7-4.9 5.4-3.8z" fill="#f5f3ee"/>
            </svg>
            <span>
              <small>Get it on</small>
              Google Play
            </span>
          </a>
        </div>
      </div>

      <div className="app-right">
        <div className="phone phone-back">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="screen-statusbar">
              <span>9:41</span>
              <span className="screen-dot" />
            </div>
            <div className="screen-block screen-block-wide" />
            <div className="screen-block screen-block-tall" />
          </div>
        </div>

        <div className="phone phone-front">
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="screen-statusbar">
              <span>9:41</span>
              <span className="screen-dot" />
            </div>
            <div className="screen-heading" />
            <div className="screen-card">
              <div className="screen-card-img" />
              <div className="screen-card-line" />
              <div className="screen-card-line short" />
            </div>
            <div className="screen-button" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
