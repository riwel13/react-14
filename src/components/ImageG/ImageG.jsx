import { Component } from "react"
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import style from "./ImageG.module.css";

class ImageG extends Component {
  render(){

    const {images, onClick} = this.props

    return(
      <>
      
      <ul className={style.list}>
        {images.map((img) => {
            return(
                <ImageGalleryItem key={img.id} image={img} onClick={onClick}/>
            )
        })}
      </ul>
      </>
    )
  }
}
export default ImageG