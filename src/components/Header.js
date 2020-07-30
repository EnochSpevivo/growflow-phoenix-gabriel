import React, { useEffect, Fragment } from "react";

import "styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container container--header">
        <h1 className="title title--header is-4">Employees</h1>

        <div className="header__employee-section">
          <div class="tabs tabs--header">
            <ul>
              <li class="is-active">
                <a href="#">Employees</a>
              </li>
              <li>
                <a href="#">Terminated</a>
              </li>
            </ul>
          </div>

          <button class="button button--header">Add new employee</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
