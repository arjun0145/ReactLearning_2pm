import React from "react";
import { Container, Table, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GetData } from "../services/Inquiry.js";

function UsersList() {
  const [user, setuser] = useState([]);


  // here is fetchusers fucntion which will fetch all users through api


  const fetchusers = async () => {
 
   const res =  GetData()  // GetData function is written in service.js file inside Services folder
   setuser(res.data)

  };


  // Here is useEffect Hook which will fetch all users

  useEffect(() => {
    fetchusers();  // this function will set the users in state

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
