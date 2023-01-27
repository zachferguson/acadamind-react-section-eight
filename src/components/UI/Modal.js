import "./Modal.css";

const Modal = (props) => {
  let closeAction = (props) => {
    document.getElementById("error-modal").style.display = "none";
  };
  return (
    <div id="error-modal" className="modal">
      <div id="error-modal_card">
        <h2>An error has occurred.</h2>
        <hr />
        <p id="modal-text"></p>
        <button onClick={closeAction}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
