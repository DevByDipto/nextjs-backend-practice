'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { email, password, redirect: true, callbackUrl: '/' });
  };

  return (
    <form onSubmit={handleSubmit} className='bg-red-500 flex flex-col w-2xl '>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Sign In</button>
      <button type="button" onClick={() => signIn('google')}>Sign in with Google</button>
    </form>
  );
};

export default SignInPage;
