import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          className="logo"
          src="https://cryptologos.cc/logos/uniswap-uni-logo.png"
          alt="logo"
        />
      </header>
      <nav className="nav">
        <ul>
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Messages</a>
          </div>
          <div>
            <a>News</a>
          </div>
          <div>
            <a>Music</a>
          </div>
          <div>
            <a>Settings</a>
          </div>
        </ul>
      </nav>
      <div className="content">
        <div>
          {' '}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkHJrb01ivtcr8JPllzt8md3UgQ6Iy41S8QT0GvgV4Cobb0fjORsUVaHO5gsfgYERPmI&usqp=CAU"
            alt="wallpaper"
          />
        </div>
        <div>
          <img
            src="https://www.datocms-assets.com/89231/1682439036-ava.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
