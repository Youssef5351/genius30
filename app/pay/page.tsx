
"use client"
import React from 'react';
import firstStep from '../../lib/paymob'; 

const PayPage: React.FC = () => {

  const handleClick = async () => {
    try {
      await firstStep();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Pay</button>
    </div>
  );
}

export default PayPage;
