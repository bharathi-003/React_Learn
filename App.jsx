import React from "react";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>User Management App</h1>
      <UserList />
    </div>
  );
};

export default App;
