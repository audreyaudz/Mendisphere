import { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Npmhos = () => {
  const url = "http://localhost:8000/npmhos";
  const [npmhos, setNpmhos] = useState([]);

  const fetchNpmhos = async () => {
    try {
      const response = await axios.get(url);
      setNpmhos(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNpmhos();
  }, []);

  const listing = (data) => {
    console.log(data);
    return (
      <Fragment>
        <table className="inner-table">
          <tbody>
            {data.map((details) => (
              <tr key={details.Id}>
                <td>{details.Name}</td>
                <td>{details.Email}</td>
                <td>{details.LoginName}</td>
                <td>{details.Designation}</td>
                <td>{details.PermissionType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  };

  const serviceList = (data) => {
    return (
      <Fragment>
        <table className="inner-table">
          <tbody>
            {data.map((details) => (
              <tr key={details.Id}>
                <td>{details.Name}</td>
                <td>{details.Description}</td>
                <td>{details.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <table>
        <thead>
          <tr className="header">
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Members</th>
            <th>Services</th>
          </tr>
        </thead>
        <tbody>
          {npmhos.map((npmho) => (
            <tr key={npmho.Id}>
              <td>{npmho.Name}</td>
              <td>{npmho.Email}</td>
              <td>{npmho.Website}</td>
              <td>{listing(npmho.Members)}</td>
              <td>{serviceList(npmho.Services)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Npmhos;
