import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupArtist() {
  const navigate = useNavigate();

  return (
    <div>
      <form>
        <input placeholder="Nome completo:*" required />
        <input placeholder="Nome artístico:*" required />
        <input placeholder="Especialidade:*" required />
        <input placeholder="Estado:*" required />
        <input type="email" placeholder="E-mail:*" required />
        <input type="telephone" placeholder="Whatsapp:*" required />
        <input type="password" placeholder="Senha:*" required />
        <input type="password" placeholder="Confirmar senha:*" required />

        <button type="submit">Cadastrar</button>
      </form>

      <button type="button" onClick={() => navigate('/login')}>Ja possui uma conta? Entre aqui</button>
    </div>
  );
}
