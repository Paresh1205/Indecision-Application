import React from 'react';

const Option = (props) => {
  return (
    <div className="widget-option">
      <p>{props.index}.{props.optionText}</p>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        className="button button--link"
      >
        remove
      </button>
    </div>
  );
};

export default Option;
