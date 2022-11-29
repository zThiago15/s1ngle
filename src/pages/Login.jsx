import React from 'react';

export default function Login() {
  return (
    <form>
      <input type="email" placeholder="E-mail*" required />
      <input type="password" placeholder="Senha*" required />
      <button type="button">Login</button>
    </form>
  );
}
