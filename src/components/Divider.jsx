import React from 'react';

function Divider() {
  return (
    <div className="divider">
      <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/images/divider.png`} alt="" />
    </div>
  );
}

export default Divider;
