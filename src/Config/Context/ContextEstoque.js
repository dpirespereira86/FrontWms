import React, { createContext, useState } from 'react';
import axios from 'axios';
import { ApiEstoquePrincipal } from '../../Services/API/enderecos';

export const Context = createContext();

// eslint-disable-next-line
export const ContextEstoque = ({ children }) => {
  const [Principal, setPrincipal] = useState([]);
  const [User, setUser] = useState([]);

  const x = User.length > 0 ? User : ['0', 'falhou'];

  const { first_name, last_name, setor, groups, email, last_login } = x[0];

  async function handleEstoque() {
    const { data } = await axios.get(ApiEstoquePrincipal, {
      headers: {
        Authorization: 'Token ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    });

    setPrincipal(data);
  }

  return (
    <Context.Provider
      value={{ Principal, first_name, last_name, groups, setor, email, last_login, handleEstoque, setUser, User }}
    >
      {children}
    </Context.Provider>
  );
};
