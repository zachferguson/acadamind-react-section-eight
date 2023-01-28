import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./NewUser.module.css";

const NewUser = (props) => {
  const [editedUserName, setEditedUserName] = useState("");
  const [editedAge, setEditedAge] = useState("");
  const userNameChangeHandler = (e) => {
    setEditedUserName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setEditedAge(e.target.value);
  };

  let clearFields = () => {
    setEditedUserName("");
    setEditedAge(0);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editedUserName.trim().length === 0) {
      console.log("invalid");
      props.setErrorModal({ message: "Please enter a valid name." });
      clearFields();
      return;
    }
    if (+editedAge <= 0) {
      console.log("invalid");
      props.setErrorModal({ message: "Please enter a valid age." });
      clearFields();
      return;
    }
    let newUser = {
      id: Math.random * 1000,
      userName: editedUserName,
      age: editedAge,
    };
    props.addNewUserHandler(newUser);
    clearFields();
  };

  return (
    <Card className={classes.input}>
      <div className="new-user-wrapper">
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            value={editedUserName}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="userage">Age</label>
          <input
            id="userage"
            type="number"
            value={editedAge}
            onChange={userAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </Card>
  );
};

export default NewUser;
