import React from 'react';
import Cards from '../components/Cards';
import product1 from "../products_img/Stainless Steel Reaction Vessels.png";

const ReactionVessel = () => {
  const productList = [
    {
      name: "Stainless Steel Reaction Vessels",
      imgUrl:
        product1
    },
    
  ];
  return (
    <>
    <h1>ReactionVessel</h1>
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

export default ReactionVessel