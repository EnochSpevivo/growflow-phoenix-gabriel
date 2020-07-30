import React, { useEffect, useRef, useState, Fragment } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import "styles/Navbar.scss";

function App(ref) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Fragment>
      <div className={`navbar__toggle-container ${isToggled ? "hide" : ""}`}>
        <span
          className="navbar__toggle"
          onClick={setIsToggled.bind(this, !isToggled)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </span>
      </div>

      {/* TODO: Growflow logo? */}
      <ProSidebar
        breakPoint={"sm"}
        toggled={isToggled}
        onToggle={() => setIsToggled(false)}
      >
        <Menu iconShape="square">
          {/* TODO: Icons? */}
          <MenuItem>Employees</MenuItem>
        </Menu>
      </ProSidebar>
    </Fragment>
  );
}

export default App;
