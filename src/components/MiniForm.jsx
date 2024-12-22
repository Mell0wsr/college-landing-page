import React, { useState } from 'react';
//import './MiniForm.scss';

const MiniForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the email
    if (!email) {
      setError('Email is required!');
      return;
    }

    // Reset the error and handle the submission
    setError('');
    alert(`Thank you for signing up, ${email}!`);
    setEmail(''); // Reset the input field
  };

  return (
    <div className="mini-form">
      <h3>Sign up for our Newsletter</h3>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default MiniForm;
