import Button from "./Button";
import "./Modal.css";

const Modal = (props) => {
  let localUpdateModalHandler = () => {
    props.setErrorModal({ message: "" });
  };

  return (
    <div
      id="error-modal"
      className={`modal ${
        props.error.message.trim().length === 0 ? "hideModal" : "showModal"
      }`}
      onClick={localUpdateModalHandler}
    >
      <div id="error-modal_card">
        <h2>An error has occurred.</h2>
        <hr />
        <p id="modal-text">{props.error.message}</p>
        <Button onClick={localUpdateModalHandler}>Close</Button>
      </div>
    </div>
  );
};

export default Modal;
