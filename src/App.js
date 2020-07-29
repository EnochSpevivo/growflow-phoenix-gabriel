import React, { useEffect, Fragment } from "react";
import axios from "axios";
import querystring from "querystring";

import Navbar from "./components/Navbar";

import "bulma/css/bulma.css";
import "typeface-montserrat";
import "./App.css";

function App() {
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}`,
        querystring.stringify({
          ApiUser: process.env.REACT_APP_API_USER,
          ApiKey: process.env.REACT_APP_API_KEY,
        })
      )
      .then((payload) => {
        console.log("payload", payload);
      })
      .catch((error) => {
        console.log("some real bullshit", error);
      });
  });

  return (
    <Fragment>
      <Navbar></Navbar>
    </Fragment>
  );
}

export default App;
