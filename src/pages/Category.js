import React from "react";
import "./Category.css";
import superApp from "../assets/images/superApp.png";

function Category() {
  return (
    <div className="cparent">
      <div className="cleft">
        <img src={superApp} alt="superapp" />
        <div className="midtext">
          Choose your
          <br />
          entertainement
          <br />
          category
        </div>
        <div className="bottomtext"></div>
      </div>

      <div className="cright">Heya</div>
    </div>
  );
}

export default Category;
