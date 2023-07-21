import React from "react";
import ownerImage from "../assets/Sir.jpg";
import Footer from "../components/Footer";
import TeamM from "../assets/Team.jpg";
import Staff from "../assets/Staff.jpeg";

const AboutUs = () => {
  return (
    <div>
    <div className="about-us-container">
    <div className="company-info-section">
        <h2>Tema Engineering Works</h2>
        <p>
          Established in the year 1988, we, “T. E. M. A. Engineering Works”, are
          a renowned Manufacturer and Supplier of Hot Water Coil, Steam Coil,
          Stainless Steel Heating Coil, Chemical Reactor, Jacketed Reactor, MS
          Jacketed Reactor, SS Jacketed Reactor, Heat Exchanger, Tube Shell Heat
          Exchanger, Industrial Vacuum Oven, Vacuum Oven, Industrial Agitator,
          Chemical Agitator, Fluid Agitator, Storage Tank, Stainless Steal
          Storage Tank, Air Receiver Storage Tank, High Grade Pressure Vessel,
          SS Pressure Vessel, MS Pressure Vessel. Sourced from reliable vendors,
          premium quality raw material is used for fabricating these products.
          Acclaimed for optimum performance, durability, resistivity against
          adverse temperature and sturdiness, our products are widely availed by
          a number of industries. Moreover, we procure Dished-ends from M/s.
          Vishwakarma Udyog, M/s. Bishnu & Co. and Expansion Bellow from M/s.
          Vishwakarma Udyog.
        </p>
        <p>
          Our modern manufacturing facility is installed with high-end machines
          and technology that are required for fulfilling the bulk requirements
          of customers. All our business operations are well-executed within the
          committed time frame, owing to the team of skilled professionals hired
          by us. Working in compliance with the set industry standards, we make
          sure to maintain the quality at every stage of the business process.
          Moreover, we have mustered a huge clientele that comprises Tractor
          Engineers Limited, Kumar Metal Industries, Fourteckh Enviro Engg and
          more, owing to our customer friendly approach.
        </p>
      </div>
      <br/><br/>
      <div className="owner-section">
        <div className="owner-image">
          <img src={ownerImage} alt="Company Owner" />
        </div>
        <div className="owner-description">
          <h2></h2>
          <p>
            We have been guided by our manager, 'Mr. Paul Fernandes', who has
            enabled us in gaining an eminent market position. His expertise in
            the domain, brilliant managerial skills and in-depth knowledge
            encourages our team members to work hard and move towards the path
            of success.
          </p>
        </div>
      </div>
      <div className="team">
          <h2>Our Team</h2>

          <div className="team_container">
           
            <div className="team_content">
              <img src={Staff}/>
            </div>
           
            <div className="team_content">
              <img src={TeamM}/>
            </div>
          </div>
          
        </div>
      
    </div>
      <Footer/>
      </div>
  );
};

export default AboutUs;
