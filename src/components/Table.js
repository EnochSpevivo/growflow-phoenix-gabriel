import React from "react";

import "styles/Table.scss";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            {/* TODO: This checkbox should select all entries on the page */}
            <input type="checkbox" />
          </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee, index) => {
          return (
            <tr key={employee.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.telephone}</td>
              <td>{employee.role}</td>
              {/* TODO: What does 'View' do? */}
              <td>
                <a href="#">View</a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
