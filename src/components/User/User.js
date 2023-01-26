import "./User.css";

const User = (props) => {
  return (
    <div className="user-wrapper">
      <p>{`${props.userName} (${props.age})`}</p>
    </div>
  );
};

export default User;
