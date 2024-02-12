import css from "./ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard";
export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id} className={css.items}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};
