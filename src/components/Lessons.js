import React from "react";
import lessonsData from "../data";
function Lessons(props) {
  return (
    <div className="lessons">
      <div className="container">
        <h2 className="text-center mb30">LESSONS</h2>
        <div className="grid-container">
          {lessonsData.lessons.map((item) => (
            <div key={item.id} className="item">
              <a href={item.link}>
                <img src={item.image} alt={item.name}></img>
                <div className="item__name">
                  <h3>{item.name}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lessons;
