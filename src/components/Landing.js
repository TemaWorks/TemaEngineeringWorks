import React, { useState, useEffect} from "react";
import bgimg from "../assets/Landing1.jpeg";
import bgimg2 from "../assets/Landing2.jpeg";
import bgimg3 from "../assets/Landing3.jpeg";
import bgimg4 from "../assets/Landing4.jpeg";
import bgimg5 from "../assets/Landing5.jpeg";



const Landing = () => {
  
  const images = [
    bgimg,
    bgimg2,
    bgimg3,
    bgimg4,
    bgimg5
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div>
      <div className="main" style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "600px"
      }}>
        {/* <img src={repair} /> */}
        <div className="main_content">
          <h2 className="text-with-border">TEMA ENGINEERING WORKS</h2>
          {/* <div className="btn">
							<Link to="/services">Services</Link>
						</div> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
