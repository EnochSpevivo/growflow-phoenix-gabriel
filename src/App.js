import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import ls from "local-storage";

import "bulma/css/bulma.css";
import "typeface-montserrat";
import "App.scss";

import Navbar from "components/Navbar";
import Table from "components/Table";
import Header from "components/Header";

function App() {
  const [employees, setEmployees] = useState(ls("employees"));

  useEffect(() => {
    // TODO: Ensure there are no ugly race conditions here
    if (!employees) {
      (async () => {
        const fetchedEmployees = await axios
          .get(`${process.env.REACT_APP_API_URL}/employee/`, {
            params: {
              ApiUser: process.env.REACT_APP_API_USER,
              ApiKey: process.env.REACT_APP_API_KEY,
            },
          })
          .catch((error) => {
            console.log("error fetching employees");
          });

        console.log("fetchedEmployees", fetchedEmployees.data);
        ls.set("employees", fetchedEmployees.data);
        setEmployees(fetchedEmployees.data);
      })();
    }
  }, [employees]);

  return (
    <Fragment>
      <Navbar></Navbar>
      <main>
        <Header></Header>

        <div className="container container--phoenix">
          <div className="box box--phoenix">
            <Table employees={employees}></Table>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
