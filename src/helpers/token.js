export const keepToken = token => {
  sessionStorage.setItem('_user', token);
};

export const getToken = () => {
  return sessionStorage.getItem('_user') || '';
};

export const removeToken = () => {
  sessionStorage.removeItem('_user');
};
