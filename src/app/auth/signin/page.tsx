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
 <form
  onSubmit={handleSubmit}
  className="
    w-full max-w-md mx-auto mt-20
    bg-zinc-900 text-zinc-100
    shadow-2xl rounded-2xl
    p-8 flex flex-col gap-6
    border border-zinc-800
  "
>
  <h2 className="text-2xl font-semibold text-center text-white">
    Sign in to your account
  </h2>

  {/* Email */}
  <div className="flex flex-col gap-1">
    <label className="text-sm text-zinc-400">
      Email
    </label>
    <input
      type="email"
      placeholder="you@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="
        bg-zinc-800 text-zinc-100 placeholder-zinc-500
        px-4 py-2 rounded-lg
        border border-zinc-700
        outline-none
        focus:ring-2 focus:ring-blue-500
        focus:border-blue-500
      "
    />
  </div>

  {/* Password */}
  <div className="flex flex-col gap-1">
    <label className="text-sm text-zinc-400">
      Password
    </label>
    <input
      type="password"
      placeholder="••••••••"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="
        bg-zinc-800 text-zinc-100 placeholder-zinc-500
        px-4 py-2 rounded-lg
        border border-zinc-700
        outline-none
        focus:ring-2 focus:ring-blue-500
        focus:border-blue-500
      "
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="
      bg-blue-600 hover:bg-blue-700
      text-white font-semibold
      py-2 rounded-lg
      transition duration-200
    "
  >
    Sign In
  </button>

  {/* Divider */}
  <div className="flex items-center gap-3">
    <div className="h-px bg-zinc-700 flex-1" />
    <span className="text-xs text-zinc-500">OR</span>
    <div className="h-px bg-zinc-700 flex-1" />
  </div>

  {/* Google */}
  <button
    type="button"
    onClick={() => signIn('google')}
    className="
      flex items-center justify-center gap-3
      bg-zinc-800 hover:bg-zinc-700
      border border-zinc-700
      text-zinc-200 font-medium
      py-2 rounded-lg
      transition duration-200
    "
  >
    <svg className="w-5 h-5" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.3l6.8-6.8C35.7 2.3 30.2 0 24 0 14.7 0 6.9 5.3 2.7 13l7.9 6.1C12.4 13.3 17.7 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-2.8-.4-4H24v7.7h12.6c-.5 3-2.1 5.6-4.6 7.3l7.1 5.5c4.2-3.9 6.9-9.6 6.9-16.5z"/>
      <path fill="#FBBC05" d="M10.6 28.9c-.5-1.4-.8-2.9-.8-4.4s.3-3 .8-4.4l-7.9-6.1C1 16.8 0 20.3 0 24s1 7.2 2.7 10.1l7.9-6.2z"/>
      <path fill="#34A853" d="M24 48c6.2 0 11.4-2.1 15.2-5.7l-7.1-5.5c-2 1.4-4.6 2.3-8.1 2.3-6.3 0-11.6-3.8-13.4-9.1l-7.9 6.2C6.9 42.7 14.7 48 24 48z"/>
    </svg>
    Sign in with Google
  </button>
</form>


  );
};

export default SignInPage;
