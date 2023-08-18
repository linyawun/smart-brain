import React from 'react';
import './FaceRecognition.css';

const FacRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center'>
      <div className='mt2 relative'>
        {imageUrl && (
          <>
            <img
              id='inputImage'
              src={imageUrl}
              alt='detectImg'
              width='500px'
              height='auto'
            />
            <div
              className='bounding-box'
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default FacRecognition;
