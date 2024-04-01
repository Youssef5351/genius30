/*const TestPage = () => {
    return(
        <div>State Page</div>

    );
}

export default TestPage;*/


import React from 'react';

const StatePage: React.FC = () => {
  // Ensure window is defined before accessing its properties
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;

  // Extract payment information from URL parameters if available
  const id = params ? params.get('id') : null;
  const pending = params ? params.get('pending') : null;
  const amountCents = params ? params.get('amount_cents') : null;
  const success = params ? params.get('success') : null;

  return (
    <div>
      <h2>State Page</h2>
      {params ? (
        <div>
          <p>User ID: {id}</p>
          <p>Pending: {pending}</p>
          <p>Amount Cents: {amountCents}</p>
          <p>Success: {success}</p>
          {/* Render other payment information as needed */}
        </div>
      ) : (
        <p>No payment information available.</p>
      )}
    </div>
  );
}

export default StatePage;
