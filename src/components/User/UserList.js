import "./UserList.css";
import User from "./User";

const UserList = (props) => {
  return (
    <div className="user-list-wrapper">
      <h2>Users</h2>
      <ul>
        {props.users.map((user, key) => {
          return <User key={user.id} userName={user.userName} age={user.age} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
