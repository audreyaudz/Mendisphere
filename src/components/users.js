import { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Users = () => {
  const url = "http://localhost:8000/users";
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Fragment>
      <table>
        <tr className="header">
          <th>Name</th>
          <th>Email</th>
          <th>Login Name</th>
        </tr>
        {users.map((user) => (
          <tr key={user.Id}>
            <td>{user.Name}</td>
            <td>{user.Email}</td>
            <td>{user.LoginName}</td>
          </tr>
        ))}
      </table>
    </Fragment>
  );
};

export default Users;
