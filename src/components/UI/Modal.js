import "./Modal.css";

const Modal = () => {
  let closeAction = () => {};
  return (
    <div className="modal">
      <p>Please enter valid user information</p>
      <button onClick={closeAction}>Close</button>
    </div>
  );
};

export default Modal;
