import React, { useState } from 'react';
import { BlockPicker } from 'react-color';
import { Popover } from 'reactstrap';
import PropTypes from 'prop-types';

const BlockColorPickerField = ({ name, onChange }) => {
  const [colorValue, setColorValue] = useState({
    color: '#4ce1b6',
    rgb: {
      r: 76, g: 225, b: 182, a: 1,
    },
  });
  const [colorActive, setColorActive] = useState({
    displayColorPicker: false,
    active: false,
  });
  const { color, rgb } = colorValue;
  const { displayColorPicker, active } = colorActive;

  const handleClick = (e) => {
    e.preventDefault();
    setColorActive(
      { displayColorPicker: !displayColorPicker, active: !active },
    );
  };
  const handleChange = (changeColor) => {
    setColorValue({ color: changeColor.hex, rgb: changeColor.rgb });
    onChange(changeColor);
  };

  return (
    <div className="color-picker">
      <button
        type="button"
        className={`color-picker__button${active ? ' active' : ''}`}
        onClick={handleClick}
        id={name}
      >
        <p className="color-picker__color">{color}</p>
        <div className="color-picker__color-view" style={{ backgroundColor: color }} />
      </button>
      <Popover
        isOpen={displayColorPicker}
        target={name}
        placement="bottom"
        className="color-picker__popover"
      >
        <BlockPicker
          color={rgb}
          onChange={handleChange}
        />
      </Popover>
    </div>
  );
};

BlockColorPickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const renderBlockColorPickerField = ({ input, meta }) => (
  <div className="form__form-group-input-wrap">
    <BlockColorPickerField {...input} />
    {meta.touched && meta.error && <span className="form__form-group-error">{meta.error}</span>}
  </div>
);

renderBlockColorPickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderBlockColorPickerField.defaultProps = {
  meta: null,
};

export default renderBlockColorPickerField;
