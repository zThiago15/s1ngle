import React, { useState } from 'react';
import authUser from '../services/user';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    const token = await authUser({ email, password });
  };

  return (
    <div className="bg-lightgrey h-[100vh]">
      <span className="flex flex-col items-center justify-around py-[5em]">
        <h1 className="text-2xl">Login</h1>
        <p className="text-gray-400 text-center w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut
          ullam, nisi provident voluptates magni assumenda dolorum quisquam et,
          est
        </p>
      </span>

      <form
        onSubmit={(e) => login(e)}
        className="flex flex-col items-center"
      >
        <input
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail*"
          value={email}
          className="w-[80%] mb-5 p-3 rounded"
          required
        />
        <input
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          placeholder="Senha*"
          value={password}
          minLength="8"
          className="w-[80%] mb-5 p-3 rounded"
          required
        />
        <button
          className="bg-gray-500 text-white p-3 w-[80%] rounded-full"
          type="submit"
        >
          Entrar

        </button>
      </form>

    </div>
  );
}
