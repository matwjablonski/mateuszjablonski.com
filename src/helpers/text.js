export const encodeText = text =>
  window.btoa(unescape(encodeURIComponent(text)));

export const decodeText = text => decodeURIComponent(escape(window.atob(text)));
