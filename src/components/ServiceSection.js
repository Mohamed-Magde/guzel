import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
const ServiceSection = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "500px",
    threshold: 1,
  });

  //animations
  const fadeUp = (element) => {
    gsap.to(element, 1, {
      opacity: 1,

      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 1
    ? fadeOut(".fade")
    : fadeUp(".fade");
  return (
    <div className="service" ref={sectionRef}>
      <div className=" service-container">
        <h2 className="  heading-2">
          Introducing the ultimate mobile app for doing stuff with your phone
        </h2>
        <p className=" fade">
          Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus
          nunc ornare adipiscing nunc adipiscing. Condimentum turpis massa.
        </p>
      </div>
      <figure>
        <img className=" fade" src="./img/img-5.jpg" alt="" />
      </figure>
    </div>
  );
};

export default ServiceSection;
