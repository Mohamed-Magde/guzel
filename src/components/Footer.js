import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="contact">
        <div className="container">
          <h3 className="heading-3">Make An appoinment</h3>
          <p>
            Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus
            nunc.
          </p>
          <form action="" className="form">
            <div className="form-group">
              <input type="email" placeholder="Email Adress" />
              <button className="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-whatsapp"></i>
        </div>
      </footer>
      ;
    </Fragment>
  );
};

export default Footer;
