import React, { useState } from "react";

import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {

const [usersList, setUsersList] = useState([]);

const addUserHandler = (username, age) => {
  setUsersList((prevUsersList) => {
    return [...prevUsersList, {name: username, age: age, id: Math.random().toString()}]
  })
}

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
