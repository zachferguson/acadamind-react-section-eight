import { useState } from "react";
import UserList from "./components/User/UserList";
import NewUser from "./components/NewUser/NewUser";
import Modal from "./components/UI/Modal";

function App() {
  const initialUsers = [
    { id: 1, userName: "Yojimbo", age: 502 },
    { id: 2, userName: "Sub-Zero", age: 200 },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState({ message: "" });

  const addNewUserHandler = (newUser) => {
    setUsers((initialUsers) => {
      return [newUser, ...initialUsers];
    });
  };
  const updateModalHandler = (error) => {
    setError(error);
  };

  return (
    <div>
      <Modal error={error} setErrorModal={updateModalHandler} />
      <NewUser
        addNewUserHandler={addNewUserHandler}
        setErrorModal={updateModalHandler}
      />
      <UserList users={users} />
    </div>
  );
}

export default App;
