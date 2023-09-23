import React, { Component } from "react";

export default class Tabularform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: [
        { sid: 1, sname: "Ram", sadd: "Guntur" },
        { sid: 2, sname: "Shyam", sadd: "Delhi" },
        { sid: 3, sname: "Mohan", sadd: "Mumbai" },
      ],
    };
  }

  render() {
    const { studentData } = this.state;

    return (
      <div>
        <table border={1}>
          
            <tr>
              <th>SID</th>
              <th>Sname</th>
              <th>Saddress</th>
            </tr>
            {studentData.length > 0 &&
              studentData.map((student) => {
                return (
                  <tr >
                    <td>{student.sid}</td>
                    <td>{student.sname}</td>
                    <td>{student.sadd}</td>
                  </tr>
                );
              })}
         
        </table>
      </div>
    );
  }
}