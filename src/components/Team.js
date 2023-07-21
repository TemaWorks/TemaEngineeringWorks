import React from "react";
import Work from "../assets/Work.mp4";
import TeamM from "../assets/Team.jpg";

const Team = () => {
  return (
    <>
      <div className="team">
          <h2>Team Work</h2>

          <div className="team_container">
            <div className="team_video">
              <video controls>
                <source src={Work} type="video/mp4" />
              </video>
            </div>
            <div className="team_content">
              <img src={TeamM}/>
            </div>
          </div>
          
        </div>
    </>
  );
};

export default Team;
