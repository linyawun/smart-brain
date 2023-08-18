import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className='form center align-itens-stretch pa4 br3 shadow-5'>
          <input
            className='f4 w-70 center form-control'
            type='text'
            onChange={onInputChange}
          />
          <button
            type='button'
            className='w-30 f4 link ph3 pv2 dib btn btn-primary'
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
