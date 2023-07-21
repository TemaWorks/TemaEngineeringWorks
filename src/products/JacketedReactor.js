import React from 'react';
import Cards from '../components/Cards';
import product1 from "../products_img/SS Jacketed Reactor.jpg";
import product2 from "../products_img/MS Jacketed Reactor.png";

const JacketedReactor = () => {
  const productList = [
    {
      name: "SS Jacketed Reactor",
      imgUrl:
        product1
    },
    {
      name: "MS Jacketed Reactor",
      imgUrl:
        product2
    },
    
    
  ];
  return (
    <>
    <h1>Jacketed Reactor</h1>
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

export default JacketedReactor