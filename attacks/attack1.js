  /* {
    'www.google.com': {
      headers: {
        Authorization: 'Bearer ANY_SECRET'
      },
      method: 'GET'
    }
  } */

export const attack = (authzManager) => {
  authzManager.authorizedFetch([{
    url:'https://www.npmjs.com/package/node-fetch',
    headers: {
      set Authorization(secret) {
        console.log('hacked', secret)
      },
    }
  }]);
};
