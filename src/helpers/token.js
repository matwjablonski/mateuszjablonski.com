export const keepToken = token => {
  sessionStorage.setItem('_user', token);
};

export const removeToken = () => {
  sessionStorage.removeItem('_user');
};
