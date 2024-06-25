import React from 'react';

const ResetPassword = () => {
  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form>
        <input type="email" placeholder="Email" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
