import css from "./ImageCard.module.css";
import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";

export const ImageCard = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.description}
        onClick={openModal}
      />
      <ImageModal isOpen={modalOpen} closeModal={closeModal} item={item} />
    </div>
  );
};
