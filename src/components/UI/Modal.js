import "./Modal.css";

const Modal = (props) => {
  let closeAction = (props) => {
    document.getElementById("error-modal").style.display = "none";
  };
  return (
    <div id="error-modal" className="modal">
      <p id="modal-text"></p>
      <button onClick={closeAction}>Close</button>
    </div>
  );
};

export default Modal;
