import { useState } from "react";
import "./NewUser.css";

const NewUser = (props) => {
  // const titleChangeHandler = (e) => {
  //   setEditedTitle(e.target.value);
  // };
  const [editedUserName, setEditedUserName] = useState("");
  const [editedAge, setEditedAge] = useState(21);
  const userNameChangeHandler = (e) => {
    setEditedUserName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setEditedAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editedUserName === "" || editedAge <= 0) {
      console.log("invalid");
    }
    let newUser = {
      id: Math.random * 1000,
      userName: editedUserName,
      age: editedAge,
    };
    props.addNewUserHandler(newUser);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input
          type="text"
          value={editedUserName}
          onChange={userNameChangeHandler}
        ></input>
        <label>Age</label>
        <input type="number"></input>
        <button type="submit" value={editedAge} onChange={userAgeChangeHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewUser;
