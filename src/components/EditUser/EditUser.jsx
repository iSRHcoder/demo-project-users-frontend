/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUSser = ({ uId }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_BACKEND_DOMAIN;
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/view-users/${uId}`)
      .then((data) => setUser(data.data.user));
  }, [uId, apiUrl]);

  const formHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const updateUser = async () => {
    try {
      await axios.patch(`http://localhost:9090/api/update-user/${uId}`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }

    setTimeout(() => {
      navigate(`/users-from-db`);
    }, 1000);
  };

  return (
    <>
      <div>
        <table border="2">
          <tr>
            <th>Full Name</th>
            <th>email</th> <th>password</th> <th>address</th> <th>education</th>{" "}
            <th>mobile num</th> <th>Action</th>
          </tr>
          <tr>
            <td>
              <input
                name="fullName"
                value={user.fullName}
                onChange={formHandler}
              />
            </td>
            <td>
              <input name="email" value={user.email} onChange={formHandler} />
            </td>
            <td>
              <input
                name="password"
                value={user.password}
                onChange={formHandler}
              />
            </td>
            <td>
              <input
                name="address"
                value={user.address}
                onChange={formHandler}
              />
            </td>
            <td>
              <input
                name="education"
                value={user.education}
                onChange={formHandler}
              />
            </td>
            <td>
              <input
                name="mobileNum"
                value={user.mobileNum}
                onChange={formHandler}
              />
            </td>
            <td>
              <Button onClick={updateUser}>Update User</Button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default EditUSser;
