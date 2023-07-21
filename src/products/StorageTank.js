import React from 'react';
import Cards from '../components/Cards';
import product1 from "../products_img/Stainless Steal Storage Tank.png";
import product2 from "../products_img/Air Receiver Storage Tank.png";
import product3 from "../products_img/Storage Tank.jpg";
import product4 from "../products_img/Chemical Tank.png";

const StorageTank = () => {
  const productList = [
    {
      name: "Stainless Steal Storage Tank",
      imgUrl:
        product1
    },
    {
      name: "Air Receiver Storage Tank",
      imgUrl:
        product2
    },
    {
      name: "Storage Tank",
      imgUrl:
        product3
    },
    {
      name: "Chemical Tank",
      imgUrl:
        product4
    },
    
  ];
  return (
    <>
    <h1>Storage Tank</h1>
    <div>
        <div className="pmain">
          <ul className="pcards">
            {productList.map((a, index) => (
              <>
                <Cards
                  key={index}
                  name={a.name}
                  imgUrl={a.imgUrl}
                  prodDesc={a.prodDesc}
                />
              </>
            ))}
          </ul>
        </div>
      </div> 
    </>
  )
}

export default StorageTank