import React from "react";
import Work from "../assets/Work.jpg";

const Features = () => {
  return (
    <>
      
      <div className="keypoint">
          <h2>Our Key Features</h2>
          <div className="key_container">
            <div className="key_content">
              <li>
                Wide Range of Products{" "}
              </li>
              <li>Customizations according to Customer needs{""}</li>
              <li>Quality Assurance{""}</li>
              <li>
                30 Years of Expertise and Experience
              </li>
              <li>Innovative Ideas and Technology use with Team</li>
              <li>Versatility and Capability to cater to different sectors, such as  chemical, pharmaceutical, food processing, oil and gas, and more inndustries</li>
            </div>
            <div className="key_img">
              <img src={Work} />
            </div>
          </div>
        </div>
    </>
  );
};

export default Features;
