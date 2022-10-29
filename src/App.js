import { Route, Routes } from "react-router-dom";
import Users from "./components/users";
import Npmhos from "./components/npmhos";
import { Fragment } from "react";
import Navbar from "./components/navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/npmhos" element={<Npmhos />} />
      </Routes>
    </Fragment>
  );
}

export default App;
