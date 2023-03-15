import React from "react";
import PropTypes from "prop-types";
import "./Section.scss";
import Button from "../Button/Button";

const Section = ({ helperText, title, buttonText, isSecondary = false }) => {
  console.log(helperText);

  return (
    <section className={`Section ${isSecondary ? "Section_secondary" : ""}`}>
      <div className="Section-Inner">
        {helperText && <p className="Section-HelperText">{helperText}</p>}
        <div className="Section-Header">
          {title && <h2 className="Section-Title">{title}</h2>}
          <Button isOutline>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  helperText: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  isSecondary: PropTypes.bool,
};

export default Section;
