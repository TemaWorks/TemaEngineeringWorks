import React from 'react';
import Cards from '../components/Cards';
import product1 from "../products_img/Pressure Vessels.png";
import product2 from "../products_img/High Grade Pressure Vessel.jpg";
import product3 from "../products_img/SS Pressure Vessel.png";
import product4 from "../products_img/MS Pressure Vessel.png";

const PressureVessel = () => {
  const productList = [
    {
      name: "Pressure Vessels",
      imgUrl:
        product1
    },
    {
      name: "High Grade Pressure Vessel",
      imgUrl:
        product2
    },
    {
      name: "SS Pressure Vessel",
      imgUrl:
        product3
    },
    {
      name: "MS Pressure Vessel",
      imgUrl:
        product4
    },
    
    
  ];
  return (
    <>
    <h1>PressureVessel</h1>
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

export default PressureVessel