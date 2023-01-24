import "./UserList.css";
import User from "./User";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user, key) => {
        return <User key={user.id} userName={user.userName} age={user.age} />;
      })}
    </ul>
  );
};

export default UserList;
