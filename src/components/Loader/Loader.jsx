import React from 'react';
import { Puff } from 'react-loader-spinner';

function Loader() {
  const loaderStyles = {
    display: 'flex',
    justifyContent: 'center',

    height: '100vh',
  };

  return (
    <div style={loaderStyles}>
      <Puff color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default Loader;
