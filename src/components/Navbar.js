import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={navBackground ? "toggled" : "nav"}>
      <div className="container">
        <figure className="logo">
          <img src="./img/logo.png" alt="" />
        </figure>

        <ul className="nav-list">
          <li>
            <a href="" className="nav-list-item">
              Home
            </a>
          </li>
          <li>
            <a href="" className="nav-list-item">
              About
            </a>
          </li>
          <li>
            <a href="" className="nav-list-item">
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
