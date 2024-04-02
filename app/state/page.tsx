/*"use client"

import React, { useEffect, useState } from 'react';

const StatePage: React.FC = () => {
  // State to hold payment information
  const [paymentInfo, setPaymentInfo] = useState<any>(null);

  // Effect to parse URL parameters and set payment information
  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    
    // Extract payment information
    const id = params.get('id');
    const amountCents = params.get('amount_cents');
    const success = params.get('success');
    const hmac = params.get('hmac');
    const currency = params.get('currency');
    const orderId = params.get('order');


    // Set payment information state
    setPaymentInfo({ id, amountCents, success, hmac, currency, order: orderId }); // Ensure 'order' property matches the rendering below
  }, []);

  return (
    <div>
      <h2>Payment Status</h2>
      {paymentInfo ? (
        <div>
          <p>ID: {paymentInfo.id}</p>
          <p>Amount Cents: {paymentInfo.amountCents}</p>
          <p>Payment Success: {paymentInfo.success}</p>
          <p>HMAC: {paymentInfo.hmac}</p>
          <p>Currency: {paymentInfo.currency}</p>
          <p>Order ID: {paymentInfo.order}</p>
        </div>
      ) : (
        <p>Please Wait a Second......</p>
      )}
    </div>
  );
}

export default StatePage;*/
/*
"use client"

import React, { useEffect, useState } from 'react';

const StatePage: React.FC = () => {
  // State to hold payment information
  const [paymentInfo, setPaymentInfo] = useState<any>(null);

  // Effect to parse URL parameters and set payment information
  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    
    // Extract payment information
    const id = params.get('id');
    const amountCents = params.get('amount_cents');
    const success = params.get('success');
    const hmac = params.get('hmac');
    const currency = params.get('currency');
    const orderId = params.get('order');

    // Set payment information state
    setPaymentInfo({ id, amountCents, success, hmac, currency, order: orderId }); // Ensure 'order' property matches the rendering below
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Payment Status</h2>
      {paymentInfo ? (
        <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '16px', maxWidth: '1300px', margin: '0 auto' }}>
          <p><strong>ID:</strong> {paymentInfo.id}</p>
          <p><strong>Amount Cents:</strong> {paymentInfo.amountCents}</p>
          <p><strong>Payment Success:</strong> {paymentInfo.success}</p>
          <p><strong>HMAC:</strong> {paymentInfo.hmac}</p>
          <p><strong>Currency:</strong> {paymentInfo.currency}</p>
          <p><strong>Order ID:</strong> {paymentInfo.order}</p>
        </div>
      ) : (
        <p>Please Wait a Second......</p>
      )}
    </div>
  );
}

export default StatePage;
*/
"use client"
import React, { useEffect, useState } from 'react';

const StatePage: React.FC = () => {
  // State to hold payment information
  const [paymentInfo, setPaymentInfo] = useState<any>(null);

  // Effect to parse URL parameters and set payment information
  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    
    // Extract payment information
    const id = params.get('id');
    const amountCents = params.get('amount_cents');
    const success = params.get('success');
    const hmac = params.get('hmac');
    const currency = params.get('currency');
    const orderId = params.get('order');

    // Set payment information state
    setPaymentInfo({ id, amountCents, success, hmac, currency, order: orderId }); // Ensure 'order' property matches the rendering below
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Payment Status</h1>
      {paymentInfo ? (
        <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '15px', maxWidth: '1300px', margin: '0 auto' }}>
          <p><strong>ID:</strong> {paymentInfo.id}</p>
          <p><strong>Amount Cents:</strong> {paymentInfo.amountCents}</p>
          <p><strong>Payment Success:</strong> {paymentInfo.success}</p>
          <p><strong>HMAC:</strong> {paymentInfo.hmac}</p>
          <p><strong>Currency:</strong> {paymentInfo.currency}</p>
          <p><strong>Order ID:</strong> {paymentInfo.order}</p> {/* Ensure this matches the property name in the state */}
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#008000' }}>Your Payment Is Approved!!! Congratulations 🎉</p>
          </div>
        </div>
      ) : (
        <p>Please Wait a Second......</p>
      )}
    </div>
  );
}

export default StatePage;
