import { Component } from "react";
import style from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    const {image, onClick} = this.props

    return (
      <li className={style.li}>
        <img src={image.webformatURL} alt={image.tags} onClick={() => onClick(image.largeImageURL)} />
      </li>
    );
  }
}

export default ImageGalleryItem;
