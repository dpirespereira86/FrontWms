export const IsAutentcted = () => {
  const isLogged = !!localStorage.getItem('token');
  return isLogged;
};

export default IsAutentcted;
