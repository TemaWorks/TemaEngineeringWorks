import React from 'react'
import Cards from "../components/Cards";
import product1 from "../products_img/Stainless Steel Heating Coil.png";
import product2 from "../products_img/Hot Water Coil.png";
import product3 from "../products_img/Steam Coil.jpg";

const HeatingCoil = () => {
  const productList = [
    {
      name: "Stainless Steel Heating Coil",
      imgUrl:
        product1
    },
    {
      name: "Hot Water Coil",
      imgUrl:
        product2
    },
    {
      name: "Steam Coil",
      imgUrl:
        product3
    },
    
  ];
  return (
    <>
    <h1>Heating Coil</h1>
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

export default HeatingCoil