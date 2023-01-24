import "./User.css";

const User = (props) => {
  return (
    <div>
      <p>{`${props.userName} (${props.age})`}</p>
    </div>
  );
};

export default User;
