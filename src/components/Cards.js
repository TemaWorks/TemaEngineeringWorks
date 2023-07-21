import { Component } from "react";

function Cards(product) {
  return (
    <>
      <li className="pcards_item">
        <div className="pcard">
          <div className="pcard_image">
            <img src={product.imgUrl} className="pcard_img" />
          </div>
          <div className="pcard_content">
            <h2 className="pcard_title">{product.name}</h2>
            
          </div>
        </div>
      </li>
    </>
  );
}
export default Cards;
