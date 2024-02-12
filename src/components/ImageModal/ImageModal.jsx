import css from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    padding: "0",
    height: "90%",
    border: "0",
    outline: "0",
    borderRadius: "50px",
    transform: "translate(-50%, -50%)",
    background: "transperent",
    boxShadow: "rgb(38, 57, 77) 0px 40px 60px -10px",
  },
};

Modal.setAppElement("#root");

export const ImageModal = ({ item, isOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <img
          src={item.urls.regular}
          alt={item.description}
          className={css.img}
        />
      </Modal>
    </div>
  );
};
