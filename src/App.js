import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import ls from "local-storage";

import "bulma/css/bulma.css";
import "typeface-montserrat";
import "App.scss";

import Navbar from "components/Navbar";
import Table from "components/Table";
import Header from "components/Header";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [employees, setEmployees] = useState(ls("employees"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const paginateRecords = (records, page, limit) => {};

  const renderPagination = (records) => {};

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
        <Header setIsModalOpen={setIsModalOpen}></Header>

        <div className="container container--phoenix">
          <div className="box box--phoenix">
            <Table employees={currentPage}></Table>
          </div>
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
      ></Modal>
    </Fragment>
  );
}

export default App;
