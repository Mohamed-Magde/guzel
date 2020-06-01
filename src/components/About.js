import React, { Fragment, useRef } from "react";

const About = () => {
  const items = [
    {
      id: 1,
      icon: "fas fa-cloud",
      title: "Magna etiam",
      desc:
        "Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.",
      bg: "#e89980",
    },
    {
      id: 2,
      icon: "fas fa-chart-area",
      title: "Ipsum dolor",
      desc:
        "Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.",
      bg: "#7fcdb8",
    },
    {
      id: 3,
      icon: "fas fa-bolt",
      title: "Sed feugiat",
      desc:
        "Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.",
      bg: "#90b0ba",
    },
    {
      id: 4,
      icon: "fas fa-lock",
      title: "Enim phasellus",
      desc:
        "Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.",
      bg: "#e5cb95",
    },
  ];

  const betweens = [
    {
      id: 1,

      title: "Magna etiam",
      desc:
        "Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.",
      img: "./img/img-1.jpg",
    },
  ];

  return (
    <Fragment>
      <div className="about">
        <div className="container ">
          <div className="about-grid">
            {items.map((item) => {
              const { id, bg, icon, title, desc } = item;
              return (
                <div className="about-grid-item " key={id}>
                  <i className={icon} style={{ background: bg }}></i>
                  <h3 className="heading-3">{title}</h3>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
