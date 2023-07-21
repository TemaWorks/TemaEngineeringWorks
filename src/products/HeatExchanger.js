import React from "react";
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import product1 from "../products_img/Tube Shell Heat Exchanger.png";
import product2 from "../products_img/Tube And Shell Heat Exchanger.png"
import product3 from "../products_img/Industrial Heat Exchanger.png";
import product4 from "../products_img/Heat Exchanger.png";

const HeatExchanger = () => {
  const productList = [
    {
      name: "Tube Shell Heat Exchanger",
      imgUrl:
        product1,
      
    },
    {
      name: "Tube And Shell Heat Exchanger",
      imgUrl:
        product2,
    },
    {
      name: "Heat Exchangers",
      imgUrl:
        product4
    },
     {
      name: "Industrial Heat Exchanger",
      imgUrl:
      product3
    },
    {
      name: "Heat Exchanger",
      imgUrl:
        product4
    },
  ];

  return (
    <>
      <div>
        <h1>Heat Exchanger</h1>
      </div>
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
  );
}

export default HeatExchanger;
