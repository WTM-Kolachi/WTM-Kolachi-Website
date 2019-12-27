import React from "react";
import Wtm_main from "../images/logo/WTM-Main.svg";
import image404 from "../images/404.svg";
import { Link } from "gatsby";

const NotFound404 = () => {
  return (
    <div class="container">
      <img
        src={Wtm_main}
        alt="Wtm logo"
        className="back"
        style={{ minidth: `400px`, marginBottom: `0.5rem` }}
      />
      <div className="center">
        <img src={image404} />
        <div className="text-message">
          It appears that you used an invalid link press
          <Link className="text-style-1" to="./">
            {" "}
            here{" "}
          </Link>{" "}
          to go to the Main page{" "}
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
