import React from "react";
import { Container, Table, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GetData } from "../services/Inquiry.js";

function UsersList() {
  const [user, setuser] = useState([]);
  const fetchusers = async () => {
    // const res = await fetch("http://localhost:9200/getdata");
    // const data = await res.json();
    // setuser(data);
    // console.log(data);
   const res =  GetData()
   console.log(res);
  };
  useEffect(() => {
    fetchusers();
  }, []);
  return (
    <div>
      <Container>
        <Container className="mt-3">
          <Alert variant="warning">There is users list</Alert>
        </Container>

        <Container className="mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No.</th>
                <th> Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Batch</th>
              </tr>
            </thead>
            <tbody>
              {user.map((e,index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.phone}</td>
                    <td>{e.email}</td>
                    <td>{e.batch}</td>
                  </tr>
                );
              })}

            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
}

export default UsersList;
