import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar(props) {
  const [fixed, setFixed] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const [isLight, setIsLight] = useState(isLightTheme);
  const style = isLight ? light : dark;

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      setFixed(false);
      setIsLight(true);
    } else if (window.scrollY > 70) {
      setFixed(true);
      setIsLight(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div
      className={`${fixed === true ? "navbar sticky fixed" : "navbar sticky"}`}
      style={style}
    >
      <div className="logo">
        <Link to="/home">Reactjs-Training</Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/task">Task</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
