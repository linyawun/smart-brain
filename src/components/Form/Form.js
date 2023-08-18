import React from 'react';

const InputGroup = ({ labelName, id, type, handleChange }) => {
  return (
    <>
      <label className='db fw6 lh-copy f5 mb1' htmlFor={id}>
        {labelName}
      </label>
      <input
        className='form-control'
        type={type}
        name={id}
        id={id}
        onChange={handleChange}
      />
    </>
  );
};
export default InputGroup;
