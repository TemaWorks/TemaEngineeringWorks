import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faBoxes } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";

const Choose = () => {
  return (
    <>
      <center>
        <section class="cservices">
          <div class="ccontainer">
            <h2 class="ctitle">Why to Choose us ?</h2>
            <p class="ctext-services">We are here to serve you ..</p>
            <div class="ccards">
              <div class="ccard">
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  size="5x"
                  color="grey"
                />
                <h3>Faster Service</h3>
              </div>

              <div class="ccard">
                <FontAwesomeIcon icon={faCheckCircle} size="5x" color="grey" />
                <h3>Quality Assured Products</h3>
              </div>

              <div class="ccard">
                <FontAwesomeIcon icon={faBoxes} size="5x" color="grey" />
                <h3>We accept Bulk Order</h3>
              </div>

              <div class="ccard">
                <FontAwesomeIcon icon={faFlask} size="5x" color="grey" />
                <h3>Proper Testing and Measure</h3>
              </div>

              <div class="ccard">
                <FontAwesomeIcon icon={faTruck} size="5x" color="grey" />
                <h3>On Time Product Dispatch</h3>
              </div>

              <div class="ccard">
                <FontAwesomeIcon icon={faAward} size="5x" color="grey" />

                <h3>Award Winning Performance</h3>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>
  );
};

export default Choose;
