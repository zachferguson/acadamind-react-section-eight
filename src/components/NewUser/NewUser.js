import { useState } from "react";
import "./NewUser.css";

const NewUser = (props) => {
  // const titleChangeHandler = (e) => {
  //   setEditedTitle(e.target.value);
  // };
  const [editedUserName, setEditedUserName] = useState("");
  const [editedAge, setEditedAge] = useState("");
  const userNameChangeHandler = (e) => {
    setEditedUserName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setEditedAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editedUserName === "") {
      console.log("invalid");
      document.getElementById("error-modal").style.display = "block";
      document.getElementById(
        "modal-text"
      ).innerText = `Please enter a valid name`;
      return;
    }
    if (editedAge <= 0) {
      console.log("invalid");
      document.getElementById("error-modal").style.display = "block";
      document.getElementById(
        "modal-text"
      ).innerText = `Please enter a valid age`;
      return;
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
        <input
          type="number"
          value={editedAge}
          onChange={userAgeChangeHandler}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewUser;
