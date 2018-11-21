import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => (
  <div className="image-list">{props.images.map(renderImage)}</div>
);

function renderImage(image) {
  return <ImageCard key={image.id} image={image} />;
}

export default ImageList;
