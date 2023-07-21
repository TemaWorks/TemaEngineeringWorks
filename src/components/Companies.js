import React from "react";
import Godrej from "../assets/GODREJ-AND-BOYCE.png";
import Cadbury from "../assets/cadbury-svg.png";
import Allied from "../assets/allied_logo-1-250x250.png";
import Warana from "../assets/warana.png";
import Kumar from "../assets/kumar-logo-2.png";
import Firetech from "../assets/Firetech.jpg";
import Bajaj from "../assets/Bajaj.png"

const Companies = () => {

  const clientsData = [
    { name: "Godrej & Boyce Mfg. Co. Ltd ", logo: Godrej },
    { name: "Cadbury India Limited", logo: Cadbury },
    { name: "Aliied Engineers", logo: Allied },
    { name: "SHREE WARANA SAHAKARI DUDH UTPADAK PRAKRIYA SANGH LTD.", logo: Warana },
    { name: "Kumar Metal Industries", logo: Kumar },
    { name: "Firetech Equipments & Systems Pvt. Ltd", logo: Firetech },
    { name: "Bajaj Steel Industries Pvt. Ltd", logo: Bajaj },
   
  ];

  return (
    <>
      <div className="our-clients">
      <h2>Our Clients</h2>
      <div className="client-logos">
        {clientsData.map((client, index) => (
          <div className="client-logo" key={index}>
            <img src={client.logo} alt={client.name} />
            <div className="client-name">{client.name}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Companies;
