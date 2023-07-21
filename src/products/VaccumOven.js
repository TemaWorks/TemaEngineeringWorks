import React from 'react';
import Cards from '../components/Cards';
import product1 from "../products_img/Industrial Vaccum Oven.JPG";
import product2 from "../products_img/vacuum-oven-250x250.jpg"

const VaccumOven = () => {
  const productList = [
    {
      name: "Industrial Vacuum Oven",
      imgUrl:
        product1
    },
    {
      name: "Vacuum Oven",
      imgUrl:
        product2
    },
    
    
  ];
  return (
    <>
    <h1>VaccumOven</h1>
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

export default VaccumOven