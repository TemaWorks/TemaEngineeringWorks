import React from 'react';
import Cards from '../components/Cards';
import product1 from "../products_img/My project-1 (4).png";
import product2 from "../products_img/Industrial Agitator.png";
import product3 from "../products_img/Chemical Agitator.jpg"

const IndustrialAgitator = () => {

  const productList = [
    {
      name: "Fluid Agitator",
      imgUrl:
        product1
    },
    {
      name: "Industrial Agitator",
      imgUrl:
        product2
    },
    {
      name: "Chemical Agitator",
      imgUrl:
        product3
    },
    
  ];



  return (
    <>
    <h1>IndustrialAgitator</h1>
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

export default IndustrialAgitator