import React from "react";
import bgimg from "../assets/tanksimg.jpg";
import Product1 from "../assets/My project-1 (1).png";
import Product2 from "../assets/My project-1 (2).png";
import Product3 from "../assets/My project-1 (3).png";
import Product4 from "../assets/My project-1.png";
import Product5 from "../assets/My project (2).png";
import Product6 from "../assets/My project-1 (4).png";

const Sservice = () => {
  const myStyle = {
    background: `url(${bgimg})`,
  };
  
  return (
    <>
    <center>
      <div style={myStyle}>
        <h1>Some of Our Products</h1>
        <div class="sscontainer">
          <div class="sscard">
            <div class="ssface ssface1">
              <div class="sscontent">
                <img src={Product1} />
                {/* <h3> Design </h3> */}
              </div>
            </div>
            <div class="ssface ssface2">
              <div class="sscontent">
                <h1>Strainer</h1>
              </div>
            </div>
          </div>

          <div class="sscard">
            <div class="ssface ssface1">
              <div class="sscontent">
                <img src={Product2} />
                {/* <h3> Code </h3> */}
              </div>
            </div>
            <div class="ssface ssface2">
              <div class="sscontent">
                <h1>Heat Exchanger Condenser</h1>
                
              </div>
            </div>
          </div>
          <div class="sscard">
            <div class="ssface ssface1">
              <div class="sscontent">
                <img src={Product3} />
                {/* <h3>Launch</h3> */}
              </div>
            </div>
            <div class="ssface ssface2">
              <div class="sscontent">
               <h1>Industrial Reboiler</h1>
                
              </div>
            </div>
          </div>
          <div class="sscard">
            <div class="ssface ssface1">
              <div class="sscontent">
                <img src={Product4} />
                {/* <h3> Code </h3> */}
              </div>
            </div>
            <div class="ssface ssface2">
              <div class="sscontent">
                <h1>
                  Pressure Vessel
                </h1>
                
              </div>
            </div>
          </div>
          <div class="sscard">
            <div class="ssface ssface1">
              <div class="sscontent">
                <img src={Product5} />
                {/* <h3> Code </h3> */}
              </div>
            </div>
            <div class="ssface ssface2">
              <div class="sscontent">
                <h1>Fluid Agitator</h1>
                
              </div>
            </div>
          </div>
          <div class="sscard">
            <div class="ssface ssface1">
              <div class="sscontent">
                <img src={Product6} />
                {/* <h3> Code </h3> */}
              </div>
            </div>
            <div class="ssface ssface2">
              <div class="sscontent">
                <h1>Pressure Vessel</h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </center>
    </>
  );
};

export default Sservice;
