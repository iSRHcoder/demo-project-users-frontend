import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersFromDB = () => {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_BACKEND_DOMAIN;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/view-users`)
      .then((data) => setData(data.data.users))
      .catch((err) => console.log("err", err));
  }, [apiUrl]);

  const editBtnHandler = (id) => {
    navigate(`/users-from-db/${id}`);
  };

  const deleteUserHandler = (id) => {
    axios
      .delete(`${apiUrl}/api/view-users/${id}`)
      .then(() => {
        setData(data.filter((user) => user._id !== id));
      })
      .catch((err) => console.log("err", err));
  };

  const userdata = data.map((ele) => {
    return (
      <tr key={ele._id}>
        <td>{ele.fullName}</td>
        <td>{ele.email}</td>
        <td>{ele.password}</td>
        <td>{ele.address}</td>
        <td>{ele.education}</td>
        <td>{ele.mobileNum}</td>
        <td>
          <Button
            style={{ textDecoration: "underline" }}
            onClick={() => editBtnHandler(ele._id)}
          >
            edit
          </Button>
        </td>
        <td>
          <Button onClick={() => deleteUserHandler(ele._id)}>Delete</Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h3> Users From DB</h3>
      <div>
        <table border="2">
          <tr>
            <th>Full Name</th>
            <th>email</th> <th>password</th> <th>address</th> <th>education</th>{" "}
            <th>mobile num</th> <th>Action</th>
          </tr>
          {userdata}
        </table>
      </div>
    </>
  );
};

export default UsersFromDB;
