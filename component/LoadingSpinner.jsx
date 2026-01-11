import React from 'react'
import { TailSpin } from 'react-loader-spinner';

export default function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",        
        height: "200px",
      }}
    >
      <TailSpin
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        visible={true}
      />
    </div>
  );
}
