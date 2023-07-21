import React from 'react';
import Award1 from "../assets/Award1.jpeg";
import Award2 from "../assets/Award2.jpeg"

const Achievements = () => {
  return (
    <>
    <div><div className="page-wrapper">
    <div className="content-wrapper">
      <input type="radio" className='radio' name="toggle" id="toggle1" />
      <input type="radio" className='radio' name="toggle" id="toggle2" />
      <input type="radio" className='radio' name="toggle" id="toggle3" />
      <section id="section-1">
        <div className="image-container">
          <img src={Award1} alt="" />
        </div>
        <div className="info-container">
          <h1>Under the Guidence of Paul Sir, we won 5th Godrej Annual Supplier Partnership Conference Award</h1>
          <label htmlFor="toggle2">Click to see next</label>
        </div>
      </section>
      <section id="section-2">
        <div className="image-container">
          <img src={Award2} alt="" />
        </div>
        <div className="info-container">
          <h1>Again under the Guidence of Paul Sir, we secured 7th Godrej Aerospace Supplier Partnership Conference - 2017 Award</h1>
          <label htmlFor="toggle3">Click to back</label>
        </div>
      </section>
    </div>
  </div>
  </div>
    </>
  )
}

export default Achievements