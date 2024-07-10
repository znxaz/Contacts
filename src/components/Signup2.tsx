// SignupComponent.tsx
import React, { useState } from 'react';
import { signup } from '../api/auth/AuthService';

const SignupComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const user = await signup(email, password);
      console.log('Signed up user:', user);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
