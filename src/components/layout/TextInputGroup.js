import React from "react";
//import propTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

// TextInputGroup.propTypes = {
//   name: propTypes.string.isRequired,
//   placeholder: propTypes.string.isRequired,
//   type: propTypes.string.isRequired,
//   value: propTypes.string.isRequired,
//   onChange: propTypes.func.isRequired,
//   label: propTypes.string.isRequired
// };

TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;
