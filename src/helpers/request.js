const requests = {
  get: (uri) => fetch(`${process.env.REACT_APP_API_URL}api/${uri}`).then(response => response.json()),
  post: () => {},
}

export default requests;
