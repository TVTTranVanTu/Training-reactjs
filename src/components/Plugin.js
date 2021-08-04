import React from "react";
import lessonsData from "../data";

function Plugin(props) {
  return (
    <div className="plugins">
      <div className="container">
        <h2 className="text-center mb30">PLUGINS</h2>
        <div className="grid-container">
          {lessonsData.Plugins.map((item) => (
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

export default Plugin;
